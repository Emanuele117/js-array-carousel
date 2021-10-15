// al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra

// e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo

// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.


/* STRUMENTI

- array

- eventListner .click

- ciclo for

*/

const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let titolo = document.querySelector(".immagine-grande h2")

let attiva = 0;

let immagineGrande = document.querySelector(".img-grande")

let paragrafo = document.querySelector(".immagine-grande p")

const bottone = document.querySelector(".bottone-giu")
bottone.addEventListener('click',
    function () {
        if (attiva < items.length - 1) {
            console.log("click");

            attiva++
            console.log(attiva);
            immagineGrande.setAttribute("src", items[attiva])
            titolo.innerHTML = title[attiva]
            paragrafo.innerHTML = text[attiva]
        }
    }

)

let bottoneSu = document.querySelector(".bottone-su")
bottoneSu.addEventListener('click',
    function () {
        if (attiva > 0) {
            attiva--
            immagineGrande.setAttribute("src", items[attiva])
            titolo.innerHTML = title[attiva]
            paragrafo.innerHTML = text[attiva]
        }
    }
)

