// const urlParams = new URLSearchParams(window.location.search);
// const artId = urlParams.get('art');

// const container = document.getElementById('workContainer');

// // ART DATA 
// const artworks = {
//     1: {
//         title: "das Auge der",
//         description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/1-das-Auger-der.jpg", "assets/images/artworks/1.1-das-Auge-der-Detail.jpg"]
//     },

//     2: {
//         title: "Flora’s Raketer",
//         description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/2-Floras-Rakete.jpg", "assets/images/artworks/2.1-Floras-Rakete-Detail.jpg"]
//     },

//     3: {
//         title: "bliss",
//         description: "fineliner, marker, colored pencil on 190 g/m²  white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/3-bliss.jpg", "assets/images/artworks/3.1-bliss-Detail.jpg"]
//     },
//     4: {
//         title: "Schmetterlingsgerüst",
//         description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/4-Schmetterlingsgerust.jpg", "assets/images/artworks/4.1-Schmetterlingsgerust-Detail.jpg"]
//     },
//     5: {
//         title: "Federkreisel",
//         description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/5-Federkreisel.jpg", "assets/images/artworks/5.1-Federkreisel-Detail.jpg"]
//     },
//     6: {
//         title: "a flight that split in neon feathers",
//         description: "fineliner, marker, colored pencil on 190 g/m² white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/6-a-flight-that-split-in-neon-feathers.jpg", "assets/images/artworks/6.1-a-flight-that-split-in-neon-feathers-Detail.jpg"]
//     },
//     7: {
//         title: "göttliches Timing trifft Matcha Latte",
//         description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
//         images: ["assets/images/artworks/7-gottliches-Timing-trifft-Matcha-Latte.jpg", "assets/images/artworks/7.1-gottliches-Timing-trifft-Matcha-Latte-Detail.jpg"]
//     },


//     8: {
//         special: true,
//         pieces: [
//             {
//                 title: "capricorn sun, libra moon, virgo rising 1/3",
//                 description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.1-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             },
//             {
//                 title: "capricorn sun, libra moon, virgo rising 2/3",
//                 description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8.2-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.3-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             },
//             {
//                 title: "capricorn sun, libra moon, virgo rising 3/3",
//                 description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8.4-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.5-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             }
//         ]
//     },

//     9: {
//         title: "rot ist die Liebe",
//         description: "acrylic paint, fineliner, marker, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/9-rot-ist-die-Liebe.jpg", "assets/images/artworks/9.1-rot-ist-die-Liebe-Detail.jpg"]
//     },
//     10: {
//         title: "Animus",
//         description: "fineliner on 190 g/m² white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/10-Animus.jpg", "assets/images/artworks/10.1-Animus-Detail.jpg"]
//     },
//     11: {
//         title: "madre ayahuasca",
//         description: "fineliner, marker, pen on cardboard, 71 cm x 106 cm",
//         images: ["assets/images/artworks/11-madre-ayahuasca.jpg", "assets/images/artworks/11.1-madre-ayahuasca-Detail.jpg"]
//     },
//       12: {
//         title: "making waves",
//         description: "fineliner, marker on black cardboard, 42 cm x 59 cm",
//         images: ["assets/images/artworks/12-making-waves.jpg", "assets/images/artworks/12.1-making-waves-Detail.jpg"]
//     },
//     13: {
//         title: "I’m that ghost",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/13-Im-that-ghost.jpg", "assets/images/artworks/13.1-Im-that-ghost-Detail.jpg"]
//     },

//      14: {
//         title: "I believe in myself enough to be patient",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/14-I-believe-in-myself-enough-to-be-patient.jpg", "assets/images/artworks/14.1-Ibelieve-in-myself-enough-to-be-patient-Detail.jpg"]
//     },
//     15: {
//         title: "Mutterwunde heilen",
//         description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/15-Mutterwunde-heilen.jpg", "assets/images/artworks/15.1-Mutterwunde-heilen-Detail.jpg"]
//     },
//     16: {
//         title: "weise Instanz",
//         description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/16-weise-Instanz.jpg", "assets/images/artworks/16.1-weise-Instanz-Detail.jpg"]
//     },
//     17: {
//         title: "leafy greens and a love poem",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/17-leafy-greens-and-a-love-poem.jpg", "assets/images/artworks/17.1-leafy-greens-and-a-love-poem-Detail.jpg"]
//     },
//      18: {
//         title: "may you be protected by all the God there is",
//         description: "acrylic paint, marker on 300 g/m² medium-weight linen, 80 cm x 100 cm x 4,5 cm",
//         images: ["assets/images/artworks/18-may-you-be-protected-by-all-the-God-there-is.jpg", "assets/images/artworks/18.1-may-you-be-protected-by-all-the-God-there-is-Detail.jpg"]
//     },
//      19: {
//         title: "a lesson in softening",
//         description: "acrylic paint, fineliner, marker on cotton fabric, 70 cm x 100 cm x 1,5 cm",
//         images: ["assets/images/artworks/19-a-lesson-in-softening.jpg", "assets/images/artworks/19.1-a-lesson-in-softening-Detail.jpg"]
//     },

//     20: {
//         title: "Cappuccino Sonne Schnee",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 120 cm x 120 cm x 3,8 cm",
//         images: ["assets/images/artworks/20-Cappuccino-Sonne-Schnee.jpg", "assets/images/artworks/20.1-Cappuccino-Sonne-Schnee-Detail.jpg"]
//     },
//     21: {
//         title: "still looking for the dragon that swallowed me",
//         description: "acrylic paint, marker, pen on glossy paper, 70 cm x 100 cm",
//         images: ["assets/images/artworks/21-still-looking-for-the-dragon-that-swallowed-me.jpg", "assets/images/artworks/21.1-still-looking-for-the-dragon-that-swallowed-me-Detail.jpg"]
//     },
//     22: {
//         title: "Fiebertraum",
//         description: "red wine, acrylic paint, fineliner, marker on cardboard, 62 cm x 100 cm",
//         images: ["assets/images/artworks/22-Fiebertraum.jpg", "assets/images/artworks/22.1-Fiebertraum-Detail.jpg"]
//     },
//     23: {
//         title: "manic panic",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on recycled paper, 82 cm x 117 cm",
//         images: ["assets/images/artworks/23-manic-panic.jpg", "assets/images/artworks/23.1-manic-panic-Detail.jpg"]
//     },

//     24: {
//         title: "when thoughts cloud vision and vision clears thoughts",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/24-when-thoughts-cloud-vision-and-vision-clears-thoughts.jpg", "assets/images/artworks/24.1-when-thoughts-cloud-vision-and-vision-clears-thoughts-Detail.jpg"]
//     },

//     25: {
//         title: "quit or succeed",
//         description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/25-quit-or-succeed.jpg", "assets/images/artworks/25.1-quit-or-succeed-Detail.jpg"]
//     },

//     26: {
//         title: "Nancy Botwin",
//         description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/26-Nancy-Botwin.jpg", "assets/images/artworks/26.1-Nancy-Botwin-Detail.jpg"]
//     },







// };



// // Render normal artwork
// if (artworks[artId] && !artworks[artId].special) {

//     const art = artworks[artId];

//     container.innerHTML = `
//         <div class="work-title">${art.title}</div>
//         <div class="work-description">${art.description}</div>
//         <div class="art-images">
//             ${art.images.map(img => `<img src="${img}" loading="lazy">`).join("")}
//         </div>
//     `;
// }

// // Render special case (art 8)
// if (artworks[artId] && artworks[artId].special) {

//     artworks[artId].pieces.forEach(piece => {

//         container.innerHTML += `
//             <div class="work-title">${piece.title}</div>
//             <div class="work-description">${piece.description}</div>
//             <div class="art-images">
//                 ${piece.images.map(img => `<img src="${img}" loading="lazy">`).join("")}
//             </div>
//         `;
//     });
// }








//new


// const urlParams = new URLSearchParams(window.location.search);
// const artId = urlParams.get('art');

// const container = document.getElementById('workContainer');

// // ART DATA 
// const artworks = {
//     1: {
//         title: "das Auge der",
//         description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/1-das-Auger-der.jpg", "assets/images/artworks/1.1-das-Auge-der-Detail.jpg"]
//     },

//     2: {
//         title: "Flora’s Raketer",
//         description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/2-Floras-Rakete.jpg", "assets/images/artworks/2.1-Floras-Rakete-Detail.jpg"]
//     },

//     3: {
//         title: "bliss",
//         description: "fineliner, marker, colored pencil on 190 g/m²  white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/3-bliss.jpg", "assets/images/artworks/3.1-bliss-Detail.jpg"]
//     },
//     4: {
//         title: "Schmetterlingsgerüst",
//         description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/4-Schmetterlingsgerust.jpg", "assets/images/artworks/4.1-Schmetterlingsgerust-Detail.jpg"]
//     },
//     5: {
//         title: "Federkreisel",
//         description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/5-Federkreisel.jpg", "assets/images/artworks/5.1-Federkreisel-Detail.jpg"]
//     },
//     6: {
//         title: "a flight that split in neon feathers",
//         description: "fineliner, marker, colored pencil on 190 g/m² white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/6-a-flight-that-split-in-neon-feathers.jpg", "assets/images/artworks/6.1-a-flight-that-split-in-neon-feathers-Detail.jpg"]
//     },
//     7: {
//         title: "göttliches Timing trifft Matcha Latte",
//         description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
//         images: ["assets/images/artworks/7-gottliches-Timing-trifft-Matcha-Latte.jpg", "assets/images/artworks/7.1-gottliches-Timing-trifft-Matcha-Latte-Detail.jpg"]
//     },

//     8: {
//         special: true,
//         pieces: [
//             {
//                 title: "capricorn sun, libra moon, virgo rising 1/3",
//                 description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.1-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             },
//             {
//                 title: "capricorn sun, libra moon, virgo rising 2/3",
//                 description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8.2-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.3-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             },
//             {
//                 title: "capricorn sun, libra moon, virgo rising 3/3",
//                 description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
//                 images: ["assets/images/artworks/8.4-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.5-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
//             }
//         ]
//     },

//     9: {
//         title: "rot ist die Liebe",
//         description: "acrylic paint, fineliner, marker, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/9-rot-ist-die-Liebe.jpg", "assets/images/artworks/9.1-rot-ist-die-Liebe-Detail.jpg"]
//     },
//     10: {
//         title: "Animus",
//         description: "fineliner on 190 g/m² white paper, 21 cm x 29,7 cm",
//         images: ["assets/images/artworks/10-Animus.jpg", "assets/images/artworks/10.1-Animus-Detail.jpg"]
//     },
//     11: {
//         title: "madre ayahuasca",
//         description: "fineliner, marker, pen on cardboard, 71 cm x 106 cm",
//         images: ["assets/images/artworks/11-madre-ayahuasca.jpg", "assets/images/artworks/11.1-madre-ayahuasca-Detail.jpg"]
//     },
//     12: {
//         title: "making waves",
//         description: "fineliner, marker on black cardboard, 42 cm x 59 cm",
//         images: ["assets/images/artworks/12-making-waves.jpg", "assets/images/artworks/12.1-making-waves-Detail.jpg"]
//     },
//     13: {
//         title: "I’m that ghost",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/13-Im-that-ghost.jpg", "assets/images/artworks/13.1-Im-that-ghost-Detail.jpg"]
//     },

//     14: {
//         title: "I believe in myself enough to be patient",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/14-I-believe-in-myself-enough-to-be-patient.jpg", "assets/images/artworks/14.1-Ibelieve-in-myself-enough-to-be-patient-Detail.jpg"]
//     },
//     15: {
//         title: "Mutterwunde heilen",
//         description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/15-Mutterwunde-heilen.jpg", "assets/images/artworks/15.1-Mutterwunde-heilen-Detail.jpg"]
//     },
//     16: {
//         title: "weise Instanz",
//         description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
//         images: ["assets/images/artworks/16-weise-Instanz.jpg", "assets/images/artworks/16.1-weise-Instanz-Detail.jpg"]
//     },
//     17: {
//         title: "leafy greens and a love poem",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/17-leafy-greens-and-a-love-poem.jpg", "assets/images/artworks/17.1-leafy-greens-and-a-love-poem-Detail.jpg"]
//     },
//     18: {
//         title: "may you be protected by all the God there is",
//         description: "acrylic paint, marker on 300 g/m² medium-weight linen, 80 cm x 100 cm x 4,5 cm",
//         images: ["assets/images/artworks/18-may-you-be-protected-by-all-the-God-there-is.jpg", "assets/images/artworks/18.1-may-you-be-protected-by-all-the-God-there-is-Detail.jpg"]
//     },
//     19: {
//         title: "a lesson in softening",
//         description: "acrylic paint, fineliner, marker on cotton fabric, 70 cm x 100 cm x 1,5 cm",
//         images: ["assets/images/artworks/19-a-lesson-in-softening.jpg", "assets/images/artworks/19.1-a-lesson-in-softening-Detail.jpg"]
//     },

//     20: {
//         title: "Cappuccino Sonne Schnee",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 120 cm x 120 cm x 3,8 cm",
//         images: ["assets/images/artworks/20-Cappuccino-Sonne-Schnee.jpg", "assets/images/artworks/20.1-Cappuccino-Sonne-Schnee-Detail.jpg"]
//     },
//     21: {
//         title: "still looking for the dragon that swallowed me",
//         description: "acrylic paint, marker, pen on glossy paper, 70 cm x 100 cm",
//         images: ["assets/images/artworks/21-still-looking-for-the-dragon-that-swallowed-me.jpg", "assets/images/artworks/21.1-still-looking-for-the-dragon-that-swallowed-me-Detail.jpg"]
//     },
//     22: {
//         title: "Fiebertraum",
//         description: "red wine, acrylic paint, fineliner, marker on cardboard, 62 cm x 100 cm",
//         images: ["assets/images/artworks/22-Fiebertraum.jpg", "assets/images/artworks/22.1-Fiebertraum-Detail.jpg"]
//     },
//     23: {
//         title: "manic panic",
//         description: "acrylic paint, fineliner, marker, pen, colored pencil on recycled paper, 82 cm x 117 cm",
//         images: ["assets/images/artworks/23-manic-panic.jpg", "assets/images/artworks/23.1-manic-panic-Detail.jpg"]
//     },

//     24: {
//         title: "when thoughts cloud vision and vision clears thoughts",
//         description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/24-when-thoughts-cloud-vision-and-vision-clears-thoughts.jpg", "assets/images/artworks/24.1-when-thoughts-cloud-vision-and-vision-clears-thoughts-Detail.jpg"]
//     },

//     25: {
//         title: "quit or succeed",
//         description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/25-quit-or-succeed.jpg", "assets/images/artworks/25.1-quit-or-succeed-Detail.jpg"]
//     },

//     26: {
//         title: "Nancy Botwin",
//         description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
//         images: ["assets/images/artworks/26-Nancy-Botwin.jpg", "assets/images/artworks/26.1-Nancy-Botwin-Detail.jpg"]
//     },
// };

// // Render normal artwork
// if (artworks[artId] && !artworks[artId].special) {
//     const art = artworks[artId];
    
//     let imagesHtml = '';
//     art.images.forEach((img, index) => {
//         if (index === 0) {
//             // First image gets high priority for faster loading
//             imagesHtml += `<img src="${img}" loading="eager" fetchpriority="high">`;
//         } else {
//             // Second image loads normally
//             imagesHtml += `<img src="${img}" loading="lazy" fetchpriority="low">`;
//         }
//     });

//     container.innerHTML = `
//         <div class="work-title">${art.title}</div>
//         <div class="work-description">${art.description}</div>
//         <div class="art-images">
//             ${imagesHtml}
//         </div>
//     `;
// }

// // Render special case (art 8)
// if (artworks[artId] && artworks[artId].special) {
//     let allHtml = '';
    
//     artworks[artId].pieces.forEach(piece => {
//         let imagesHtml = '';
//         piece.images.forEach((img, index) => {
//             if (index === 0) {
//                 imagesHtml += `<img src="${img}" loading="eager" fetchpriority="high">`;
//             } else {
//                 imagesHtml += `<img src="${img}" loading="lazy" fetchpriority="low">`;
//             }
//         });
        
//         allHtml += `
//             <div class="work-title">${piece.title}</div>
//             <div class="work-description">${piece.description}</div>
//             <div class="art-images">
//                 ${imagesHtml}
//             </div>
//         `;
//     });
    
//     container.innerHTML = allHtml;
// }












const urlParams = new URLSearchParams(window.location.search);
const artId = urlParams.get('art');

const container = document.getElementById('workContainer');

// ART DATA 
const artworks = {
    1: {
        title: "das Auge der",
        description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/1-das-Auger-der.jpg", "assets/images/artworks/1.1-das-Auge-der-Detail.jpg"]
    },

    2: {
        title: "Flora’s Raketer",
        description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/2-Floras-Rakete.jpg", "assets/images/artworks/2.1-Floras-Rakete-Detail.jpg"]
    },

    3: {
        title: "bliss",
        description: "fineliner, marker, colored pencil on 190 g/m²  white paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/3-bliss.jpg", "assets/images/artworks/3.1-bliss-Detail.jpg"]
    },
    4: {
        title: "Schmetterlingsgerüst",
        description: "fineliner, marker, colored pencil on 220 g/m²  terra vanilla paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/4-Schmetterlingsgerust.jpg", "assets/images/artworks/4.1-Schmetterlingsgerust-Detail.jpg"]
    },
    5: {
        title: "Federkreisel",
        description: "fineliner, marker, colored pencil on 220 g/m² terra vanilla paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/5-Federkreisel.jpg", "assets/images/artworks/5.1-Federkreisel-Detail.jpg"]
    },
    6: {
        title: "a flight that split in neon feathers",
        description: "fineliner, marker, colored pencil on 190 g/m² white paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/6-a-flight-that-split-in-neon-feathers.jpg", "assets/images/artworks/6.1-a-flight-that-split-in-neon-feathers-Detail.jpg"]
    },
    7: {
        title: "göttliches Timing trifft Matcha Latte",
        description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
        images: ["assets/images/artworks/7-gottliches-Timing-trifft-Matcha-Latte.jpg", "assets/images/artworks/7.1-gottliches-Timing-trifft-Matcha-Latte-Detail.jpg"]
    },

    8: {
        special: true,
        pieces: [
            {
                title: "capricorn sun, libra moon, virgo rising 1/3",
                description: "acrylic paint, marker, colored pencil on plasterboard, 90 cm x 125 cm x 1,5 cm",
                images: ["assets/images/artworks/8-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.1-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
            },
            {
                title: "capricorn sun, libra moon, virgo rising 2/3",
                description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
                images: ["assets/images/artworks/8.2-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.3-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
            },
            {
                title: "capricorn sun, libra moon, virgo rising 3/3",
                description: "acrylic paint, marker on plasterboard, 90 cm x 125 cm x 1,5 cm",
                images: ["assets/images/artworks/8.4-capricorn-sun-libra-moon-virgo-rising.jpg", "assets/images/artworks/8.5-capricorn-sun-libra-moon-virgo-rising-Detail.jpg"]
            }
        ]
    },

    9: {
        title: "rot ist die Liebe",
        description: "acrylic paint, fineliner, marker, colored pencil on cardboard, 70 cm x 100 cm",
        images: ["assets/images/artworks/9-rot-ist-die-Liebe.jpg", "assets/images/artworks/9.1-rot-ist-die-Liebe-Detail.jpg"]
    },
    10: {
        title: "Animus",
        description: "fineliner on 190 g/m² white paper, 21 cm x 29,7 cm",
        images: ["assets/images/artworks/10-Animus.jpg", "assets/images/artworks/10.1-Animus-Detail.jpg"]
    },
    11: {
        title: "madre ayahuasca",
        description: "fineliner, marker, pen on cardboard, 71 cm x 106 cm",
        images: ["assets/images/artworks/11-madre-ayahuasca.jpg", "assets/images/artworks/11.1-madre-ayahuasca-Detail.jpg"]
    },
    12: {
        title: "making waves",
        description: "fineliner, marker on black cardboard, 42 cm x 59 cm",
        images: ["assets/images/artworks/12-making-waves.jpg", "assets/images/artworks/12.1-making-waves-Detail.jpg"]
    },
    13: {
        title: "I'm that ghost",
        description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
        images: ["assets/images/artworks/13-Im-that-ghost.jpg", "assets/images/artworks/13.1-Im-that-ghost-Detail.jpg"]
    },

    14: {
        title: "I believe in myself enough to be patient",
        description: "acrylic paint, fineliner, marker, pen, colored pencil on cardboard, 70 cm x 100 cm",
        images: ["assets/images/artworks/14-I-believe-in-myself-enough-to-be-patient.jpg", "assets/images/artworks/14.1-Ibelieve-in-myself-enough-to-be-patient-Detail.jpg"]
    },
    15: {
        title: "Mutterwunde heilen",
        description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
        images: ["assets/images/artworks/15-Mutterwunde-heilen.jpg", "assets/images/artworks/15.1-Mutterwunde-heilen-Detail.jpg"]
    },
    16: {
        title: "weise Instanz",
        description: "acrylic paint, fineliner, marker on cardboard, 70 cm x 100 cm",
        images: ["assets/images/artworks/16-weise-Instanz.jpg", "assets/images/artworks/16.1-weise-Instanz-Detail.jpg"]
    },
    17: {
        title: "leafy greens and a love poem",
        description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
        images: ["assets/images/artworks/17-leafy-greens-and-a-love-poem.jpg", "assets/images/artworks/17.1-leafy-greens-and-a-love-poem-Detail.jpg"]
    },
    18: {
        title: "may you be protected by all the God there is",
        description: "acrylic paint, marker on 300 g/m² medium-weight linen, 80 cm x 100 cm x 4,5 cm",
        images: ["assets/images/artworks/18-may-you-be-protected-by-all-the-God-there-is.jpg", "assets/images/artworks/18.1-may-you-be-protected-by-all-the-God-there-is-Detail.jpg"]
    },
    19: {
        title: "a lesson in softening",
        description: "acrylic paint, fineliner, marker on cotton fabric, 70 cm x 100 cm x 1,5 cm",
        images: ["assets/images/artworks/19-a-lesson-in-softening.jpg", "assets/images/artworks/19.1-a-lesson-in-softening-Detail.jpg"]
    },

    20: {
        title: "Cappuccino Sonne Schnee",
        description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 120 cm x 120 cm x 3,8 cm",
        images: ["assets/images/artworks/20-Cappuccino-Sonne-Schnee.jpg", "assets/images/artworks/20.1-Cappuccino-Sonne-Schnee-Detail.jpg"]
    },
    21: {
        title: "still looking for the dragon that swallowed me",
        description: "acrylic paint, marker, pen on glossy paper, 70 cm x 100 cm",
        images: ["assets/images/artworks/21-still-looking-for-the-dragon-that-swallowed-me.jpg", "assets/images/artworks/21.1-still-looking-for-the-dragon-that-swallowed-me-Detail.jpg"]
    },
    22: {
        title: "Fiebertraum",
        description: "red wine, acrylic paint, fineliner, marker on cardboard, 62 cm x 100 cm",
        images: ["assets/images/artworks/22-Fiebertraum.jpg", "assets/images/artworks/22.1-Fiebertraum-Detail.jpg"]
    },
    23: {
        title: "manic panic",
        description: "acrylic paint, fineliner, marker, pen, colored pencil on recycled paper, 82 cm x 117 cm",
        images: ["assets/images/artworks/23-manic-panic.jpg", "assets/images/artworks/23.1-manic-panic-Detail.jpg"]
    },

    24: {
        title: "when thoughts cloud vision and vision clears thoughts",
        description: "acrylic paint, marker on 410 g/m²  heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
        images: ["assets/images/artworks/24-when-thoughts-cloud-vision-and-vision-clears-thoughts.jpg", "assets/images/artworks/24.1-when-thoughts-cloud-vision-and-vision-clears-thoughts-Detail.jpg"]
    },

    25: {
        title: "quit or succeed",
        description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
        images: ["assets/images/artworks/25-quit-or-succeed.jpg", "assets/images/artworks/25.1-quit-or-succeed-Detail.jpg"]
    },

    26: {
        title: "Nancy Botwin",
        description: "acrylic paint, marker on 410 g/m² heavy cotton fabric, 100 cm x 100 cm x 3,8 cm",
        images: ["assets/images/artworks/26-Nancy-Botwin.jpg", "assets/images/artworks/26.1-Nancy-Botwin-Detail.jpg"]
    },
};

// ===== INSTANT IMAGE LOADING FUNCTION =====
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url; // This starts loading immediately
    });
}

// ===== RENDER NORMAL ARTWORK =====
if (artworks[artId] && !artworks[artId].special) {
    const art = artworks[artId];
    
    // Start loading images IMMEDIATELY (before HTML renders)
    preloadImages(art.images);
    
    let imagesHtml = '';
    art.images.forEach((img, index) => {
        // Both images load with highest priority
        imagesHtml += `<img src="${img}" fetchpriority="high" loading="eager">`;
    });

    container.innerHTML = `
        <div class="work-title">${art.title}</div>
        <div class="work-description">${art.description}</div>
        <div class="art-images">
            ${imagesHtml}
        </div>
    `;
}

// ===== RENDER SPECIAL CASE (ART 8) =====
if (artworks[artId] && artworks[artId].special) {
    let allHtml = '';
    
    artworks[artId].pieces.forEach(piece => {
        // Preload all images for this piece instantly
        preloadImages(piece.images);
        
        let imagesHtml = '';
        piece.images.forEach(img => {
            imagesHtml += `<img src="${img}" fetchpriority="high" loading="eager">`;
        });
        
        allHtml += `
            <div class="work-title">${piece.title}</div>
            <div class="work-description">${piece.description}</div>
            <div class="art-images">
                ${imagesHtml}
            </div>
        `;
    });
    
    container.innerHTML = allHtml;
}

// ===== MARK IMAGES AS LOADED FOR CSS EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const workImages = document.querySelectorAll('.art-images img');
    
    workImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});

