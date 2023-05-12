const btnStart = document.getElementById("start");
const elshowNumberToRemember = document.querySelector("h2");
let score = 0;

// Visualizzare in pagina 5 numeri casuali.
let arrayNumber = randomOrderForRandomNumber ();
console.log(arrayNumber);
btnStart.addEventListener("click",
    function() {
        elshowNumberToRemember.innerHTML = arrayNumber ;

        // Da lì parte un timer di 30 secondi
        // Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        setTimeout (numberDisappear, 28000)

        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        setTimeout (questionsAfterTimer, 32000)

    }
)








// FUNCTION
function randomNumber () {
    let n = Math.floor((Math.random() * 100) + 1 );
    return n 
}
function randomOrderForRandomNumber () {
    let intArray = [] ;

    while (intArray.length < 5) {

        let n = randomNumber();
        if (!intArray.includes(n)) {
            intArray.push(n);
        } 
    }
    return intArray
}
function numberDisappear () {
    elshowNumberToRemember.classList.add("hidden");
}

function questionsAfterTimer () {
    for (let i = 0; i < 5; i++) {
        let risposta = parseInt(prompt("quali numeri hai visto ?"));
        console.log(risposta);

        if (arrayNumber.includes(risposta)) {
            score++
            console.log("il tuo punteggio è di " + score + "il numero indovinato è " + risposta);

        }
    }
    
}