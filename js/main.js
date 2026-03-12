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






document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".scroll-container");
    if (!container) return;

    /* ===============================
       SAVE POSITION WHEN CLICKING CONTACT
    =============================== */

    const contactLink = document.querySelector('.top-right a');

    if (contactLink) {
        contactLink.addEventListener('click', () => {
            sessionStorage.setItem("scrollPosition", window.scrollY);
        });
    }

    /* ===============================
       DUPLICATE ITEMS FOR LOOP
    =============================== */

    const items = Array.from(container.children);

    items.forEach(item => {
        container.appendChild(item.cloneNode(true));
    });

    const halfHeight = container.scrollHeight / 2;

    /* ===============================
       RESTORE POSITION
    =============================== */

    const saved = sessionStorage.getItem("scrollPosition");

    if (saved) {
        window.scrollTo(0, parseInt(saved));
        sessionStorage.removeItem("scrollPosition");
    } else {
        window.scrollTo(0, halfHeight);
    }

    /* ===============================
       STABLE INFINITE SCROLL
    =============================== */

    let isAdjusting = false;

window.addEventListener("scroll", () => {

    if (isAdjusting) return;

    const scrollY = window.scrollY;
    const halfHeight = container.scrollHeight / 2;

    // bottom
    if (scrollY > halfHeight * 1.8) {

        isAdjusting = true;

        window.scrollTo(0, scrollY - halfHeight);

        setTimeout(() => {
            isAdjusting = false;
        }, 100);

    }

    // top
    if (scrollY < halfHeight * 0.2) {

        isAdjusting = true;

        window.scrollTo(0, scrollY + halfHeight);

        setTimeout(() => {
            isAdjusting = false;
        }, 100);

    }

});

    /* ===============================
       IMAGE FADE-IN
    =============================== */

    const images = document.querySelectorAll(".scroll-item img");

    images.forEach(img => {

        if (img.complete) {
            img.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }

    });

});