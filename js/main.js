// Save scroll position before leaving homepage
document.querySelectorAll('.scroll-item').forEach(item => {
    item.addEventListener('click', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });
});

// Restore scroll position when returning
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});

const container = document.querySelector('.scroll-container');

// Clone images for loop effect
const clone = container.cloneNode(true);
document.body.appendChild(clone);

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        window.scrollTo(0, 1);
    }
});

//bye

let isLeaving = false;
let exitTimer = null;

function showByeAnimation() {
    if (isLeaving) return;
    isLeaving = true;

    const container = document.getElementById("byeMessage");
    const text = document.getElementById("byeText");
    if (!container || !text) return;

    container.style.opacity = "1"; // keep white screen visible

    // Step 1: show "bye"
    text.innerText = "bye";
    text.style.opacity = "1";

    setTimeout(() => {
        // Fade text out only
        text.style.opacity = "0";

        setTimeout(() => {
            // Change to "bye love"
            text.innerText = "bye love";
            text.style.opacity = "1";
        }, 400);
    }, 800);

    setTimeout(() => {
        // Fade everything out smoothly
        text.style.opacity = "0";
        container.style.opacity = "0";

        setTimeout(() => {
            text.innerText = "bye";
            isLeaving = false;
        }, 400);
    }, 1800);
}

document.addEventListener("mouseleave", (e) => {
    if (e.clientY <= 0) {
        exitTimer = setTimeout(() => {
            showByeAnimation();
        }, 300);
    }
});

document.addEventListener("mouseenter", () => {
    if (exitTimer) {
        clearTimeout(exitTimer);
        exitTimer = null;
    }
});