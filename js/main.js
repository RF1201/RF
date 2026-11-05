
/* =========================================
   STABLE SCROLL RESTORATION
   Homepage <-> Contact page
   - Saves artwork and scroll position
   - Supports mobile and desktop browsers
   - Preserves infinite scrolling
========================================= */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

(() => {
    const root = document.documentElement;
    const container = document.querySelector(".scroll-container");

    const Y_KEY = "homepage_saved_y";
    const COUNT_KEY = "homepage_saved_count";
    const ANCHOR_KEY = "homepage_saved_anchor";

    function reveal() {
        root.classList.remove("restoring");
    }

    const revealFailsafe = setTimeout(reveal, 10000);

    /* DEBUG PANEL */

    try {
        if (location.search.includes("nodebug")) {
            sessionStorage.removeItem("dbg");
        } else if (location.search.includes("debug")) {
            sessionStorage.setItem("dbg", "1");
        }
    } catch (e) {}

    let DEBUG = false;

    try {
        DEBUG = sessionStorage.getItem("dbg") === "1";
    } catch (e) {}

    let dbgBox = null;
    const t0 = Date.now();

    function dbg(message) {
        if (!DEBUG) return;

        if (!dbgBox) {
            dbgBox = document.createElement("div");

            dbgBox.style.cssText =
                "position:fixed;left:0;right:0;bottom:0;z-index:99999;" +
                "background:rgba(0,0,0,.85);color:#0f0;" +
                "font:11px/1.35 monospace;padding:6px 8px;" +
                "max-height:45vh;overflow:auto;" +
                "pointer-events:none;white-space:pre-wrap;";

            document.body.appendChild(dbgBox);
        }

        dbgBox.textContent +=
            "[" + (Date.now() - t0) + "ms] " + message + "\n";
    }

    if (!container) {
        clearTimeout(revealFailsafe);
        reveal();
        return;
    }

    const contactLink = document.querySelector(".top-right a");
    const originalItems = Array.from(container.children);

    let adding = false;
    let ticking = false;
    let restoring = false;
    let ready = false;
    let holding = false;
    let restoreRun = 0;

    let lastY = window.scrollY;
    let lastAnchor = null;
    let saveTimer = null;

    const docTop = element =>
        element.getBoundingClientRect().top + window.scrollY;

    /* ARTWORK ANCHOR */

    function calculateAnchor(y) {
        const items = Array.from(container.children);
        let idx = 0;

        for (let i = 0; i < items.length; i++) {
            if (docTop(items[i]) <= y + 1) {
                idx = i;
            } else {
                break;
            }
        }

        return {
            idx,
            offset: items[idx] ? y - docTop(items[idx]) : 0
        };
    }

    /* SAVE SCROLL POSITION */

    function savePosition(force = false) {
        if (!force && (!ready || restoring || holding)) {
            return;
        }

        try {
            const currentY = window.scrollY;
            let y = currentY;
            let anchor;

            if (currentY > 0 || lastY <= 0) {
                y = currentY;
                anchor = calculateAnchor(y);

                lastY = y;
                lastAnchor = anchor;
            } else {
                y = lastY;
                anchor = lastAnchor;

                if (!anchor) {
                    const stored = sessionStorage.getItem(ANCHOR_KEY);
                    if (stored) anchor = JSON.parse(stored);
                }

                if (!anchor) {
                    dbg("SAVE skipped: no saved anchor");
                    return;
                }
            }

            const items = Array.from(container.children);

            sessionStorage.setItem(Y_KEY, String(y));
            sessionStorage.setItem(COUNT_KEY, String(items.length));
            sessionStorage.setItem(ANCHOR_KEY, JSON.stringify(anchor));

            sessionStorage.setItem(
                "dbg_lastsave",
                "y=" + Math.round(y) +
                " idx=" + anchor.idx +
                " offset=" + Math.round(anchor.offset) +
                " items=" + items.length
            );

            dbg(
                "SAVE y=" + Math.round(y) +
                " idx=" + anchor.idx +
                " offset=" + Math.round(anchor.offset) +
                " force=" + force
            );
        } catch (e) {
            dbg("SAVE error: " + e.message);
        }
    }

    /* SAVE BEFORE NAVIGATION */

    if (contactLink) {
        const saveBeforeLeaving = () => savePosition(true);

        contactLink.addEventListener("click", saveBeforeLeaving, true);
        contactLink.addEventListener("pointerdown", saveBeforeLeaving, {
            passive: true
        });
        contactLink.addEventListener("touchstart", saveBeforeLeaving, {
            passive: true
        });
    }

    window.addEventListener("pagehide", () => savePosition(true));

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            savePosition(true);
        }
    });

    /* SAVE DURING SCROLLING */

    window.addEventListener("scroll", () => {
        if (ready && !restoring && !holding) {
            lastY = window.scrollY;
            lastAnchor = calculateAnchor(lastY);
        }

        if (saveTimer !== null) {
            clearTimeout(saveTimer);
        }

        saveTimer = setTimeout(() => {
            saveTimer = null;
            savePosition();
        }, 150);
    }, { passive: true });

    /* INFINITE SCROLL */

    function appendMore() {
        if (adding || originalItems.length === 0) return;

        adding = true;

        const fragment = document.createDocumentFragment();

        originalItems.forEach(item => {
            const clone = item.cloneNode(true);

            clone.querySelectorAll("img").forEach(img => {
                img.classList.remove("loaded");

                const markLoaded = () => img.classList.add("loaded");

                if (img.complete) {
                    markLoaded();
                } else {
                    img.addEventListener("load", markLoaded, {
                        once: true
                    });

                    img.addEventListener("error", markLoaded, {
                        once: true
                    });
                }
            });

            fragment.appendChild(clone);
        });

        container.appendChild(fragment);
        adding = false;
    }

    /* WAIT FOR IMAGES */

    function waitForImages(timeoutMs = 3500) {
        const imgs = Array.from(container.querySelectorAll("img"));

        const loads = imgs.map(img => {
            img.loading = "eager";
            img.classList.add("loaded");

            if (img.complete) return Promise.resolve();

            return new Promise(resolve => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
            });
        });

        return Promise.race([
            Promise.all(loads),
            new Promise(resolve => setTimeout(resolve, timeoutMs))
        ]);
    }

    const nextFrame = () =>
        new Promise(resolve => requestAnimationFrame(resolve));

    function jump(top) {
        const maxY = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight
        );

        const target = Math.max(0, Math.min(top, maxY));

        window.scrollTo(0, target);
    }

    /* RESTORE SCROLL POSITION */

    async function restorePosition() {
        const thisRun = ++restoreRun;

        let savedY = 0;
        let savedCount = 0;
        let anchor = null;

        try {
            savedY = Number(sessionStorage.getItem(Y_KEY));
            savedCount = Number(sessionStorage.getItem(COUNT_KEY));

            anchor = JSON.parse(
                sessionStorage.getItem(ANCHOR_KEY) || "null"
            );
        } catch (e) {}

        let lastSave = "none";

        try {
            lastSave = sessionStorage.getItem("dbg_lastsave") || "none";
        } catch (e) {}

        dbg(
            "RESTORE start: y=" + savedY +
            " count=" + savedCount +
            " anchor=" + JSON.stringify(anchor)
        );

        dbg("Previous save: " + lastSave);

        if (!Number.isFinite(savedY) || savedY <= 0) {
            dbg("No positive saved position; showing page at top.");

            restoring = false;
            ready = true;
            holding = false;
            lastY = window.scrollY;
            lastAnchor = calculateAnchor(lastY);

            reveal();
            return;
        }

        restoring = true;
        ready = false;
        holding = false;

        // Rebuild enough content to reach the saved position.
        if (Number.isFinite(savedCount) && savedCount > 0) {
            let safety = 0;

            while (
                container.children.length < savedCount &&
                safety < 100
            ) {
                const before = container.children.length;

                appendMore();
                safety++;

                if (container.children.length === before) break;
            }
        }

        // Allow images to load before calculating the target.
        await waitForImages(3500);

        if (thisRun !== restoreRun) return;

        const computeTarget = () => {
            const items = Array.from(container.children);

            if (anchor && items[anchor.idx]) {
                return (
                    docTop(items[anchor.idx]) +
                    (Number(anchor.offset) || 0)
                );
            }

            return savedY;
        };

        dbg(
            "Content ready: items=" + container.children.length +
            " height=" + document.documentElement.scrollHeight
        );

        jump(computeTarget());
        await nextFrame();

        if (thisRun !== restoreRun) return;

        jump(computeTarget());
        await nextFrame();

        if (thisRun !== restoreRun) return;

        jump(computeTarget());

        lastY = window.scrollY;
        lastAnchor = calculateAnchor(lastY);

        dbg(
            "RESTORE positioned: target=" +
            Math.round(computeTarget()) +
            " actual=" + Math.round(window.scrollY)
        );

        restoring = false;
        ready = true;
        holding = true;

        clearTimeout(revealFailsafe);
        reveal();

        /* TEMPORARY POSITION GUARD */

        let userMoved = false;

        const stopHolding = () => {
            userMoved = true;
            holding = false;
            lastY = window.scrollY;
            lastAnchor = calculateAnchor(lastY);
        };

        const interactionEvents = [
            "touchstart",
            "wheel",
            "keydown",
            "mousedown",
            "pointerdown"
        ];

        interactionEvents.forEach(eventName => {
            window.addEventListener(eventName, stopHolding, {
                once: true,
                passive: true
            });
        });

        const holdUntil = Date.now() + 2500;

        const holder = setInterval(() => {
            if (thisRun !== restoreRun) {
                clearInterval(holder);
                return;
            }

            if (userMoved || Date.now() >= holdUntil) {
                clearInterval(holder);

                if (holding) {
                    holding = false;
                    lastY = window.scrollY;
                    lastAnchor = calculateAnchor(lastY);
                }

                interactionEvents.forEach(eventName => {
                    window.removeEventListener(eventName, stopHolding);
                });

                return;
            }

            const target = computeTarget();

            if (Math.abs(window.scrollY - target) > 3) {
                dbg(
                    "Position guard: actual=" +
                    Math.round(window.scrollY) +
                    " target=" + Math.round(target)
                );

                jump(target);
            }
        }, 50);

        [300, 1000, 2500].forEach(ms => {
            setTimeout(() => {
                if (thisRun === restoreRun) {
                    dbg(
                        "+" + ms + "ms: y=" +
                        Math.round(window.scrollY) +
                        (userMoved ? " (user interacted)" : "")
                    );
                }
            }, ms);
        });
    }

    /* INITIAL RESTORATION */

    restorePosition();

    /* BACK-FORWARD CACHE */

    window.addEventListener("pageshow", event => {
        if (!event.persisted) return;

        dbg("pageshow: BFCache restoration detected");

        // Invalidate any older restoration attempt.
        restoreRun++;

        if (saveTimer !== null) {
            clearTimeout(saveTimer);
            saveTimer = null;
        }

        restoring = false;
        ready = false;
        holding = false;

        // Hide until the saved artwork position is restored.
        root.classList.add("restoring");

        restorePosition();
    });

    /* INFINITE SCROLL LISTENER */

    window.addEventListener("scroll", () => {
        if (ticking || restoring) return;

        ticking = true;

        requestAnimationFrame(() => {
            const bottom = window.scrollY + window.innerHeight;
            const height = document.documentElement.scrollHeight;

            if (bottom > height - 1200) {
                appendMore();
            }

            ticking = false;
        });
    }, { passive: true });

    /* IMAGE FADE-IN */

    function prepareImages() {
        container.querySelectorAll("img").forEach(img => {
            if (img.complete) {
                img.classList.add("loaded");
            } else {
                img.addEventListener("load", () => {
                    img.classList.add("loaded");
                }, { once: true });

                img.addEventListener("error", () => {
                    img.classList.add("loaded");
                }, { once: true });
            }
        });
    }

    prepareImages();

})();