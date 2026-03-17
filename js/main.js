// //new
// // Save scroll position before leaving homepage
// document.querySelectorAll('.scroll-item').forEach(item => {
//     item.addEventListener('click', () => {
//         sessionStorage.setItem('scrollPosition', window.scrollY);
//     });
// });

// // Restore scroll position when returning
// window.addEventListener('load', () => {
//     const scrollPosition = sessionStorage.getItem('scrollPosition');
//     if (scrollPosition) {
//         window.scrollTo(0, parseInt(scrollPosition));
//     } else {
//         // Start at the top
//         window.scrollTo(0, 0);
//     }
// });

// // Clone container for infinite scroll loop
// // const container = document.querySelector('.scroll-container');
// // if (container) {
// //     // Clone images for loop effect
// //     const clone = container.cloneNode(true);
// //     document.body.appendChild(clone);

// //     // Handle infinite scroll
// //     window.addEventListener('scroll', () => {
// //         const totalHeight = document.body.offsetHeight / 2; // Half is original, half is clone
// //         const currentScroll = window.scrollY;
        
// //         // If scrolling down past the clone, jump to start
// //         if (currentScroll >= totalHeight) {
// //             window.scrollTo(0, currentScroll - totalHeight);
// //         }
        
// //         // If scrolling up past the start, jump to clone
// //         if (currentScroll <= 0) {
// //             window.scrollTo(0, totalHeight - window.innerHeight - 100);
// //         }
// //     });
// // }

// const container = document.querySelector('.scroll-container');

// if (container) {

//     const items = Array.from(container.children);

//     // duplicate items for loop
//     items.forEach(item => {
//         const clone = item.cloneNode(true);
//         container.appendChild(clone);
//     });

//     const totalHeight = container.scrollHeight / 2;

//     // start in middle for smooth looping
//     window.scrollTo(0, totalHeight);

//     window.addEventListener('scroll', () => {

//         const currentScroll = window.scrollY;

//         if (currentScroll >= totalHeight * 2 - window.innerHeight) {
//             window.scrollTo(0, totalHeight);
//         }

//         if (currentScroll <= 0) {
//             window.scrollTo(0, totalHeight);
//         }

//     });

// }




// // ===== IMAGE LOADING HANDLER =====
// document.addEventListener('DOMContentLoaded', function() {
//     // Handle homepage images
//     document.querySelectorAll('.scroll-item img').forEach(img => {
//         if (img.complete) {
//             img.classList.add('loaded');
//         } else {
//             img.addEventListener('load', function() {
//                 this.classList.add('loaded');
//             });
//         }
//     });
// });













//new

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     /* ===============================
//        INFINITE SCROLL LOOP
//     =============================== */

//     // Duplicate artworks once for infinite effect
//     const items = Array.from(container.children);
//     items.forEach(item => {
//         const clone = item.cloneNode(true);
//         container.appendChild(clone);
//     });

//     // Helper to get current middle point
//     function getHalfHeight() {
//         return container.scrollHeight / 2;
//     }

//     // Start in the middle so user can scroll both ways
//     window.scrollTo(0, getHalfHeight());

//     let isAdjusting = false;

//     window.addEventListener("scroll", () => {
//         if (isAdjusting) return;

//         const scrollY = window.scrollY;
//         const halfHeight = getHalfHeight();
//         const maxScroll = container.scrollHeight - window.innerHeight;

//         // Near bottom → jump to middle
//         if (scrollY >= maxScroll - 5) {
//             isAdjusting = true;
//             window.scrollTo(0, scrollY - halfHeight);
//             setTimeout(() => isAdjusting = false, 20);
//         }

//         // Near top → jump to middle
//         if (scrollY <= 5) {
//             isAdjusting = true;
//             window.scrollTo(0, scrollY + halfHeight);
//             setTimeout(() => isAdjusting = false, 20);
//         }
//     });

//     /* ===============================
//        IMAGE FADE-IN LOADING
//     =============================== */

//     const images = document.querySelectorAll(".scroll-item img");

//     images.forEach(img => {
//         if (img.complete) {
//             img.classList.add("loaded");
//         } else {
//             img.addEventListener("load", function () {
//                 img.classList.add("loaded");
//             });
//         }
//     });
// });



//new

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     /* ===============================
//        PART 1: SAVE POSITION WHEN CLICKING CONTACT
//     =============================== */
    
//     // Save position when clicking the contact button
//     const contactLink = document.querySelector('.top-right a');
//     if (contactLink) {
//         contactLink.addEventListener('click', function(e) {
//             const currentPos = window.scrollY;
//             sessionStorage.setItem('scrollPosition', currentPos);
//             console.log('✅ Position saved before going to contact:', currentPos);
//             // Let the link work normally
//             return true;
//         });
//     }

//     /* ===============================
//        PART 2: INFINITE SCROLL SETUP
//     =============================== */
    
//     // Clone all artworks once for infinite effect
//     const items = Array.from(container.children);
//     items.forEach(item => {
//         const clone = item.cloneNode(true);
//         container.appendChild(clone);
//     });

//     // Function to get middle point
//     function getMiddlePosition() {
//         return container.scrollHeight / 2;
//     }

//     /* ===============================
//        PART 3: RESTORE POSITION WHEN RETURNING
//     =============================== */
    
//     const savedPos = sessionStorage.getItem('scrollPosition');
    
//     if (savedPos) {
//         // We have a saved position - use it
//         console.log('🔄 Restoring to saved position:', savedPos);
//         window.scrollTo(0, parseInt(savedPos));
        
//         // Clear it after restoring so next fresh visit starts at middle
//         sessionStorage.removeItem('scrollPosition');
//     } else {
//         // No saved position - start in middle
//         console.log('Starting in middle');
//         window.scrollTo(0, getMiddlePosition());
//     }

//     /* ===============================
//        PART 4: INFINITE SCROLL BEHAVIOR
//     =============================== */
    
//     let isLooping = false;

//     window.addEventListener("scroll", function() {
//         if (isLooping) return;

//         const scrollY = window.scrollY;
//         const middle = getMiddlePosition();
//         const totalHeight = container.scrollHeight;
//         const viewportHeight = window.innerHeight;

//         // If we're at the bottom, jump to middle
//         if (scrollY + viewportHeight >= totalHeight - 5) {
//             isLooping = true;
//             window.scrollTo(0, middle);
//             setTimeout(() => isLooping = false, 50);
//         }
        
//         // If we're at the top, jump to middle
//         if (scrollY <= 5) {
//             isLooping = true;
//             window.scrollTo(0, middle);
//             setTimeout(() => isLooping = false, 50);
//         }
//     });

//     /* ===============================
//        PART 5: IMAGE FADE-IN
//     =============================== */
    
//     const images = document.querySelectorAll(".scroll-item img");
//     images.forEach(img => {
//         if (img.complete) {
//             img.classList.add("loaded");
//         } else {
//             img.addEventListener("load", function() {
//                 this.classList.add("loaded");
//             });
//         }
//     });
// });




//new new

// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     // Save position when clicking contact
//     const contactLink = document.querySelector('.top-right a');
//     if (contactLink) {
//         contactLink.addEventListener('click', () => {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//         });
//     }

//     // Clone items for infinite scroll
//     const items = Array.from(container.children);
//     items.forEach(item => container.appendChild(item.cloneNode(true)));

//     const itemHeight = window.innerHeight + 20; // approx height of one artwork + gap

//     // Restore position or start at beginning
//     const savedPos = sessionStorage.getItem('scrollPos');
//     if (savedPos) {
//         window.scrollTo(0, parseInt(savedPos));
//         sessionStorage.removeItem('scrollPos');
//     } else {
//         window.scrollTo(0, 0);
//     }

//     // Simple infinite scroll check every 100ms
//     setInterval(() => {
//         const scrollY = window.scrollY;
//         const maxScroll = container.scrollHeight - window.innerHeight;

//         if (scrollY >= maxScroll - 100) {
//             window.scrollTo(0, 100);
//         } else if (scrollY <= 100) {
//             window.scrollTo(0, maxScroll - 200);
//         }
//     }, 100);

//     // Image fade in
//     document.querySelectorAll('.scroll-item img').forEach(img => {
//         if (img.complete) img.classList.add('loaded');
//         else img.addEventListener('load', () => img.classList.add('loaded'));
//     });
// });



//new

// document.addEventListener("DOMContentLoaded", function () {

//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector('.top-right a');

//     /* Save scroll position */
//     if (contactLink) {
//         contactLink.addEventListener('click', () => {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//         });
//     }

//     /* Restore scroll position */
//     const savedPos = sessionStorage.getItem('scrollPos');
//     if (savedPos) {
//         window.scrollTo(0, parseInt(savedPos));
//         sessionStorage.removeItem('scrollPos');
//     }

//     /* Store original items */
//     const originalItems = Array.from(container.children);

//     function appendMore() {

//         originalItems.forEach(item => {

//             const clone = item.cloneNode(true);

//             const img = clone.querySelector("img");

//             if (img) {
//                 img.classList.remove("loaded");

//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => {
//                         img.classList.add("loaded");
//                     });
//                 }
//             }

//             container.appendChild(clone);
//         });

//     }

//     /* Infinite scroll trigger */
//     window.addEventListener("scroll", () => {

//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         if (scrollBottom > pageHeight - 1000) {
//             appendMore();
//         }

//     });

//     /* Initial image load */
//     document.querySelectorAll('.scroll-item img').forEach(img => {
//         if (img.complete) img.classList.add('loaded');
//         else img.addEventListener('load', () => img.classList.add('loaded'));
//     });

// });




//extra


// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector('.top-right a');

//     /* Save scroll position and current item count */
//     if (contactLink) {
//         contactLink.addEventListener('click', () => {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//             sessionStorage.setItem('itemCount', container.children.length);
//         });
//     }

//     /* Store original items */
//     const originalItems = Array.from(container.children);
//     let isAdding = false;

//     function appendMore() {
//         if (isAdding) return;
//         isAdding = true;
        
//         originalItems.forEach(item => {
//             const clone = item.cloneNode(true);
//             const img = clone.querySelector("img");

//             if (img) {
//                 img.classList.remove("loaded");

//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => {
//                         img.classList.add("loaded");
//                     });
//                 }
//             }

//             container.appendChild(clone);
//         });
        
//         isAdding = false;
//     }

//     /* Restore scroll position */
//     const savedPos = sessionStorage.getItem('scrollPos');
//     const savedCount = sessionStorage.getItem('itemCount');
    
//     if (savedPos) {
//         // If we had more items before, add enough sets to reach that count
//         const currentCount = container.children.length;
//         const setsToAdd = Math.ceil((savedCount - currentCount) / originalItems.length);
        
//         for (let i = 0; i < setsToAdd; i++) {
//             appendMore();
//         }
        
//         window.scrollTo(0, parseInt(savedPos));
//         sessionStorage.removeItem('scrollPos');
//         sessionStorage.removeItem('itemCount');
//     }

//     /* Infinite scroll trigger - continuously add sets */
//     window.addEventListener("scroll", () => {
//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         // Add more content when near bottom
//         if (scrollBottom > pageHeight - 1500) {
//             appendMore();
//         }
//     });

//     /* Initial image load */
//     document.querySelectorAll('.scroll-item img').forEach(img => {
//         if (img.complete) img.classList.add('loaded');
//         else img.addEventListener('load', () => img.classList.add('loaded'));
//     });
// });



//extra extra


// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector('.top-right a');

//     /* Save scroll position and current item count */
//     if (contactLink) {
//         contactLink.addEventListener('click', () => {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//             sessionStorage.setItem('itemCount', container.children.length);
//         });
//     }

//     /* Store original items */
//     const originalItems = Array.from(container.children);
//     let isAdding = false;

//     function appendMore() {
//         if (isAdding) return;
//         isAdding = true;
        
//         originalItems.forEach(item => {
//             const clone = item.cloneNode(true);
//             const img = clone.querySelector("img");

//             if (img) {
//                 img.classList.remove("loaded");

//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => {
//                         img.classList.add("loaded");
//                     });
//                 }
//             }

//             container.appendChild(clone);
//         });
        
//         isAdding = false;
//     }

//     /* Safari resize fix - simple and reliable */
//     let lastScrollY = 0;
    
//     window.addEventListener("resize", function() {
//         // Store position before resize
//         lastScrollY = window.scrollY;
//     });
    
//     // Use requestAnimationFrame for smoother Safari rendering
//     function checkResize() {
//         if (lastScrollY !== 0) {
//             window.scrollTo(0, lastScrollY);
//             lastScrollY = 0;
//         }
//         requestAnimationFrame(checkResize);
//     }
//     requestAnimationFrame(checkResize);

//     /* Restore scroll position */
//     const savedPos = sessionStorage.getItem('scrollPos');
//     const savedCount = sessionStorage.getItem('itemCount');
    
//     if (savedPos) {
//         // If we had more items before, add enough sets to reach that count
//         const currentCount = container.children.length;
//         const setsToAdd = Math.ceil((savedCount - currentCount) / originalItems.length);
        
//         for (let i = 0; i < setsToAdd; i++) {
//             appendMore();
//         }
        
//         // Multiple attempts for Safari
//         let attempts = 0;
//         function tryScroll() {
//             window.scrollTo(0, parseInt(savedPos));
//             if (attempts < 5) {
//                 attempts++;
//                 setTimeout(tryScroll, 100);
//             }
//         }
//         tryScroll();
        
//         sessionStorage.removeItem('scrollPos');
//         sessionStorage.removeItem('itemCount');
//     }

//     /* Infinite scroll trigger */
//     window.addEventListener("scroll", () => {
//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         if (scrollBottom > pageHeight - 1500) {
//             appendMore();
//         }
//     }, { passive: true });

//     /* Initial image load */
//     document.querySelectorAll('.scroll-item img').forEach(img => {
//         if (img.complete) img.classList.add('loaded');
//         else img.addEventListener('load', () => img.classList.add('loaded'));
//     });
// });





//new extra
// document.addEventListener("DOMContentLoaded", function () {

//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector('.top-right a');

//     /* Save scroll position */
//     if (contactLink) {
//         contactLink.addEventListener('click', () => {
//             sessionStorage.setItem('scrollPos', window.scrollY);
//             sessionStorage.setItem('itemCount', container.children.length);
//         });
//     }

//     /* Store original items */
//     const originalItems = Array.from(container.children);
//     const originalLength = originalItems.length;

//     /* Give every original item a stable id */
//     originalItems.forEach((item, i) => {
//         item.dataset.id = i;
//     });

//     let isAdding = false;

//     function appendMore() {

//         if (isAdding) return;
//         isAdding = true;

//         originalItems.forEach(item => {

//             const clone = item.cloneNode(true);
//             const img = clone.querySelector("img");

//             if (img) {

//                 img.classList.remove("loaded");

//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => img.classList.add("loaded"));
//                 }

//             }

//             container.appendChild(clone);

//         });

//         isAdding = false;

//     }

//     /* Restore scroll position */

//     const savedPos = sessionStorage.getItem('scrollPos');
//     const savedCount = sessionStorage.getItem('itemCount');

//     if (savedPos) {

//         const currentCount = container.children.length;
//         const setsToAdd = Math.ceil((savedCount - currentCount) / originalLength);

//         for (let i = 0; i < setsToAdd; i++) {
//             appendMore();
//         }

//         window.scrollTo(0, parseInt(savedPos));

//         sessionStorage.removeItem('scrollPos');
//         sessionStorage.removeItem('itemCount');

//     }

//     /* Infinite scroll */

//     window.addEventListener("scroll", () => {

//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         if (scrollBottom > pageHeight - 1500) {
//             appendMore();
//         }

//     });

//     /* -------- RESIZE FIX -------- */

//     let resizeTimer;
//     let targetId = null;
//     let offset = 0;

//     function getCenterItem() {

//         const centerY = window.scrollY + (window.innerHeight / 2);
//         const items = document.querySelectorAll(".scroll-item");

//         for (let item of items) {

//             const top = item.offsetTop;
//             const bottom = top + item.offsetHeight;

//             if (centerY >= top && centerY <= bottom) {

//                 return {
//                     id: item.dataset.id,
//                     offset: centerY - top
//                 };

//             }
//         }

//         return null;

//     }

//     window.addEventListener("resize", () => {

//         const current = getCenterItem();

//         if (current) {
//             targetId = current.id;
//             offset = current.offset;
//         }

//         clearTimeout(resizeTimer);

//         resizeTimer = setTimeout(() => {

//             const items = document.querySelectorAll(".scroll-item");

//             for (let item of items) {

//                 if (item.dataset.id === targetId) {

//                     window.scrollTo(
//                         0,
//                         item.offsetTop + offset - (window.innerHeight / 2)
//                     );

//                     break;
//                 }

//             }

//         }, 250);

//     });

//     /* Initial image load */

//     document.querySelectorAll(".scroll-item img").forEach(img => {

//         if (img.complete) {
//             img.classList.add("loaded");
//         } else {
//             img.addEventListener("load", () => img.classList.add("loaded"));
//         }

//     });

// });




// document.addEventListener("DOMContentLoaded", function () {

//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector(".top-right a");

//     const originalItems = Array.from(container.children);
//     let isAdding = false;

//     /* -----------------------------
//        APPEND MORE ITEMS (INFINITE)
//     ------------------------------*/

//     function appendMore() {

//         if (isAdding) return;
//         isAdding = true;

//         originalItems.forEach(item => {

//             const clone = item.cloneNode(true);
//             const img = clone.querySelector("img");

//             if (img) {

//                 img.classList.remove("loaded");

//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => {
//                         img.classList.add("loaded");
//                     });
//                 }

//             }

//             container.appendChild(clone);

//         });

//         isAdding = false;

//     }

//     /* -----------------------------
//        SAVE POSITION BEFORE LEAVING
//     ------------------------------*/

//     if (contactLink) {

//         contactLink.addEventListener("click", () => {

//             const items = document.querySelectorAll(".scroll-item");
//             const scrollY = window.scrollY;

//             let index = 0;
//             let offset = 0;

//             for (let i = 0; i < items.length; i++) {

//                 const top = items[i].offsetTop;
//                 const bottom = top + items[i].offsetHeight;

//                 if (scrollY >= top && scrollY < bottom) {

//                     index = i % originalItems.length;
//                     offset = scrollY - top;
//                     break;

//                 }

//             }

//             sessionStorage.setItem("imageIndex", index);
//             sessionStorage.setItem("imageOffset", offset);
//             sessionStorage.setItem("itemCount", container.children.length);

//         });

//     }

//     /* -----------------------------
//        RESTORE POSITION
//     ------------------------------*/

//     const savedIndex = sessionStorage.getItem("imageIndex");
//     const savedOffset = sessionStorage.getItem("imageOffset");
//     const savedCount = sessionStorage.getItem("itemCount");

//     if (savedIndex !== null) {

//         const currentCount = container.children.length;

//         const setsToAdd = Math.ceil(
//             (savedCount - currentCount) / originalItems.length
//         );

//         for (let i = 0; i < setsToAdd; i++) {
//             appendMore();
//         }

//         function restoreScroll() {

//             const items = document.querySelectorAll(".scroll-item");

//             for (let i = 0; i < items.length; i++) {

//                 if (i % originalItems.length == savedIndex) {

//                     window.scrollTo(
//                         0,
//                         items[i].offsetTop + parseInt(savedOffset)
//                     );

//                     break;
//                 }

//             }

//         }

//         /* wait for layout + images on mobile */

//         window.addEventListener("load", () => {
//             setTimeout(restoreScroll, 200);
//         });

//         sessionStorage.removeItem("imageIndex");
//         sessionStorage.removeItem("imageOffset");
//         sessionStorage.removeItem("itemCount");

//     }

//     /* -----------------------------
//        INFINITE SCROLL TRIGGER
//     ------------------------------*/

//     window.addEventListener("scroll", () => {

//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         if (scrollBottom > pageHeight - 1500) {
//             appendMore();
//         }

//     });

//     /* -----------------------------
//        IMAGE LOAD HANDLING
//     ------------------------------*/

//     document.querySelectorAll(".scroll-item img").forEach(img => {

//         if (img.complete) {
//             img.classList.add("loaded");
//         } else {
//             img.addEventListener("load", () => {
//                 img.classList.add("loaded");
//             });
//         }

//     });

// });


// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scroll-container");
//     if (!container) return;

//     const contactLink = document.querySelector(".top-right a");
//     const originalItems = Array.from(container.children);

//     let isAdding = false;

//     function appendMore() {
//         if (isAdding) return;
//         isAdding = true;

//         originalItems.forEach(item => {
//             const clone = item.cloneNode(true);
//             const img = clone.querySelector("img");

//             if (img) {
//                 img.classList.remove("loaded");
//                 if (img.complete) {
//                     img.classList.add("loaded");
//                 } else {
//                     img.addEventListener("load", () => {
//                         img.classList.add("loaded");
//                     });
//                 }
//             }

//             container.appendChild(clone);
//         });

//         isAdding = false;
//     }

//     // Save scroll position
//     if (contactLink) {
//         contactLink.addEventListener("click", () => {
//             sessionStorage.setItem("scrollPos", window.scrollY);
//             sessionStorage.setItem("itemCount", container.children.length);
//         });
//     }

//     // Restore scroll position
//     const savedScroll = sessionStorage.getItem("scrollPos");
//     const savedCount = sessionStorage.getItem("itemCount");

//     if (savedScroll) {
//         // Add items if needed
//         const currentCount = container.children.length;
//         if (savedCount > currentCount) {
//             const setsNeeded = Math.ceil((savedCount - currentCount) / originalItems.length);
//             for (let i = 0; i < setsNeeded; i++) {
//                 appendMore();
//             }
//         }

//         // Try multiple times for Safari
//         const attempts = [300, 600, 1000, 1500];
//         attempts.forEach(delay => {
//             setTimeout(() => {
//                 window.scrollTo(0, parseInt(savedScroll));
//             }, delay);
//         });

//         sessionStorage.removeItem("scrollPos");
//         sessionStorage.removeItem("itemCount");
//     }

//     // Infinite scroll
//     window.addEventListener("scroll", () => {
//         const scrollBottom = window.scrollY + window.innerHeight;
//         const pageHeight = document.documentElement.scrollHeight;

//         if (scrollBottom > pageHeight - 1500) {
//             appendMore();
//         }
//     });

//     // Image fade in
//     document.querySelectorAll(".scroll-item img").forEach(img => {
//         if (img.complete) img.classList.add("loaded");
//         else img.addEventListener("load", () => img.classList.add("loaded"));
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".scroll-container");
    if (!container) return;

    const contactLink = document.querySelector(".top-right a");
    const originalItems = Array.from(container.children);

    let isAdding = false;

    function appendMore() {
        if (isAdding) return;
        isAdding = true;

        originalItems.forEach(item => {
            const clone = item.cloneNode(true);

            // ✅ FIX: ensure images load properly
            const img = clone.querySelector("img");
            if (img) {
                img.classList.remove("loaded");

                if (img.complete) {
                    img.classList.add("loaded");
                } else {
                    img.addEventListener("load", () => {
                        img.classList.add("loaded");
                    });
                }
            }

            container.appendChild(clone);
        });

        isAdding = false;
    }

    /* -----------------------------
       SAVE SCROLL POSITION
    ----------------------------- */

    if (contactLink) {
        contactLink.addEventListener("click", () => {
            sessionStorage.setItem("scrollPos", window.scrollY);
            sessionStorage.setItem("itemCount", container.children.length);
        });
    }

    /* -----------------------------
       RESTORE SCROLL POSITION (STABLE)
    ----------------------------- */

    const savedScroll = sessionStorage.getItem("scrollPos");
    const savedCount = parseInt(sessionStorage.getItem("itemCount"));

    if (savedScroll) {
        const currentCount = container.children.length;

        // rebuild same number of items
        if (savedCount > currentCount) {
            const setsNeeded = Math.ceil(
                (savedCount - currentCount) / originalItems.length
            );

            for (let i = 0; i < setsNeeded; i++) {
                appendMore();
            }
        }

        // ✅ KEY FIX: delay until layout is stable
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedScroll));
        }, 120);

        sessionStorage.removeItem("scrollPos");
        sessionStorage.removeItem("itemCount");
    }

    /* -----------------------------
       INFINITE SCROLL (SMOOTH)
    ----------------------------- */

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (ticking) return;

        ticking = true;

        requestAnimationFrame(() => {
            const scrollBottom = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollBottom > pageHeight - 1200) {
                appendMore();
            }

            ticking = false;
        });
    });

    /* -----------------------------
       IMAGE FADE-IN
    ----------------------------- */

    document.querySelectorAll(".scroll-item img").forEach(img => {
        if (img.complete) {
            img.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }
    });
});