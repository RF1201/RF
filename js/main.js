
//new
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
    } else {
        // Start at the top
        window.scrollTo(0, 0);
    }
});

// Clone container for infinite scroll loop
// const container = document.querySelector('.scroll-container');
// if (container) {
//     // Clone images for loop effect
//     const clone = container.cloneNode(true);
//     document.body.appendChild(clone);

//     // Handle infinite scroll
//     window.addEventListener('scroll', () => {
//         const totalHeight = document.body.offsetHeight / 2; // Half is original, half is clone
//         const currentScroll = window.scrollY;
        
//         // If scrolling down past the clone, jump to start
//         if (currentScroll >= totalHeight) {
//             window.scrollTo(0, currentScroll - totalHeight);
//         }
        
//         // If scrolling up past the start, jump to clone
//         if (currentScroll <= 0) {
//             window.scrollTo(0, totalHeight - window.innerHeight - 100);
//         }
//     });
// }

const container = document.querySelector('.scroll-container');

if (container) {

    const items = Array.from(container.children);

    // duplicate items for loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    const totalHeight = container.scrollHeight / 2;

    // start in middle for smooth looping
    window.scrollTo(0, totalHeight);

    window.addEventListener('scroll', () => {

        const currentScroll = window.scrollY;

        if (currentScroll >= totalHeight * 2 - window.innerHeight) {
            window.scrollTo(0, totalHeight);
        }

        if (currentScroll <= 0) {
            window.scrollTo(0, totalHeight);
        }

    });

}




// ===== IMAGE LOADING HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    // Handle homepage images
    document.querySelectorAll('.scroll-item img').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});