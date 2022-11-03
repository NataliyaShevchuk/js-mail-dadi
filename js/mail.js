// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere 
//al nostro programma così come lo faremmo “a mano”

//Mail
//crea la lista delle email - array
//chiedi all'utente la sua email
const emailAccettate = ["marco.rossi@gmail", "mario.bros@icloud.com", "indiana.jones@yahoo.it"];
const userEmail = prompt("Ciao! Inserisci la tua email");
console.log( userEmail );

// chiedere a florian perchè l'ho usata...
// devo usare questa :) !!!
let trovata = false;

for (let i = 0; i < emailAccettate.length; i++){

    const email = emailAccettate[i];
    
    if ( email === userEmail ){

        //trovata = true;
        console.log( email + "  " + "coincide con la email nella lista" + "  " + i );

        //alert ('email trovato');
        trovata = true;

    } else {

        //trovata = false;

        //alert ('email NON trovato');
    }
    
    /*
    console.log("i",i);
    console.log( "email", email);
    console.log("userEmail", userEmail);
    console.log( "trovata", trovata);
    */
}

console.log('trovata', trovata);
console.log('info', trovata === true);



if ( trovata == true ){
    console.log("coincide con la email nella lista");
    alert ("coincide con la email nella lista");
} else {
    alert( "Mi dispiace ma la tua email non rientra nella lista");
}

