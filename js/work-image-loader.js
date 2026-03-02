// // ===== WORK PAGE IMAGE LOADING WITH SKELETON =====
// document.addEventListener('DOMContentLoaded', function() {
//     // Target all images on work page
//     const workImages = document.querySelectorAll('.art-images img');
    
//     workImages.forEach((img, index) => {
//         // Create skeleton placeholder
//         const skeleton = document.createElement('div');
//         skeleton.className = 'skeleton-placeholder';
//         skeleton.style.display = 'block';
        
//         // Insert skeleton before image
//         img.parentNode.insertBefore(skeleton, img);
        
//         // Hide image initially
//         img.style.opacity = '0';
        
//         if (img.complete) {
//             // Already loaded
//             img.classList.add('loaded');
//             skeleton.style.display = 'none';
//         } else {
//             img.addEventListener('load', function() {
//                 this.classList.add('loaded');
//                 skeleton.style.display = 'none';
//             });
            
//             img.addEventListener('error', function() {
//                 skeleton.style.display = 'none';
//             });
//         }
//     });
// });



// Simple work page image loader
// document.addEventListener('DOMContentLoaded', function() {
//     const workImages = document.querySelectorAll('.art-images img');
    
//     workImages.forEach(img => {
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


// ===== WORK PAGE IMAGE LOADING =====
// document.addEventListener('DOMContentLoaded', function() {
//     const workImages = document.querySelectorAll('.art-images img');
    
//     workImages.forEach(img => {
//         // Initially hide image
//         img.style.opacity = '0';
        
//         if (img.complete) {
//             img.classList.add('loaded');
//             img.style.opacity = '1';
//         } else {
//             img.addEventListener('load', function() {
//                 this.classList.add('loaded');
//                 this.style.opacity = '1';
//             });
//         }
//     });
// });






// Work page image loader
document.addEventListener('DOMContentLoaded', function() {
    const workImages = document.querySelectorAll('.art-images img');
    
    workImages.forEach((img, index) => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});