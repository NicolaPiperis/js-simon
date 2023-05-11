
// Visualizzare in pagina 5 numeri casuali.
let arrayNumber = randomOrderForRandomNumber ();
console.log(arrayNumber);

// Da lì parte un timer di 30 secondi.


// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


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
        
        return intArray
    }
}