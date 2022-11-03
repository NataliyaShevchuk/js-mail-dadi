// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//realizzo due variabili con il math random
//per la persona
const person = Math.round((Math.random() * 5)+ 1);
console.log("numero casuale per la persona", person);

//per il pc
const computer = Math.round((Math.random() * 5)+ 1);
console.log("numero casuale per il computer", computer);

const num = Math.round((Math.random() * 5)+ 1);
console.log("numero casuale", num);

if ( person > computer ){
    console.log("Person, you are the winner!");
} else if ( person >= computer ){
    console.log("congrats you're in a Mexican standoff!");
} else if ( computer > person ){
    console.log("Computer, you are the winner!");
} else {
    console.log("you are a loser!");
}
