// Loader
// function timer() {
//     const timer = setTimeout(showPage, 2000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("main-wrapper").style.display = "block";
// }

// timer()

// function onScroll() {
//     const featureDetail = document.getElementById('feature-detail');
//     const featureDetailPosition = featureDetail.position();
//     window.scroll(function () {
//         const windowPosition = window.scrollTop();
//         if (windowPosition >= (featureDetailPosition.top - 100)) {
//             featureDetail.style.display = "block";
//         } else {
//             featureDetail.style.display = "none";
//         }
//     })
// }

// onScroll()

window.sr = ScrollReveal();

sr.reveal('#feature-detail', { duration: 1000 });
sr.reveal('.ib-details', { duration: 1000 });
sr.reveal('.ib-advantages', { duration: 1000});
sr.reveal('.ib-clients', { duration: 1000 });
sr.reveal('.ib-clients-icons', { duration: 1000, delay: 500 });


let legalLinks = document.querySelectorAll('.info-menu'); // NodeList
let legalTexts = document.querySelectorAll('.legal-text'); // NodeList
let legalLinksArray = [...legalLinks]; // Array
let legalTextsArray = [...legalTexts]; // Array

legalLinksArray.forEach((e) => {
    e.addEventListener('click', ()=> {
        console.log(e);
        legalTextsArray.forEach((e) => e.style.display = 'none');
        legalLinksArray.forEach((e) => {
            e.style.fontWeight = 'normal';
            e.style.color = 'var(--font)';
        });
        legalTextsArray[legalLinksArray.indexOf(e)].style.display = 'block';
        legalLinksArray[legalLinksArray.indexOf(e)].style.fontWeight = 'bold';
        legalLinksArray[legalLinksArray.indexOf(e)].style.color = 'var(--main)';
    })
})