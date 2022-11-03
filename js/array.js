// listaSpesa.length = lunghezza array = 4
//                      0       1        2          3         4
const listaSpesa = [ "latte", "pane", "ragù", "formaggio", "pasta" ];

console.log( listaSpesa );

let trovato = false;

// vorrei capire se il prodotto "pasta" esiste già nella mia lista
for ( let i = 0; i < listaSpesa.length; i++ ) {
  // salvo in una variabile il valore di listaSpesa[i]
  // solo per comondità. Usare listaSpesa[i] o elementoLista è la stessa cosa
    const elementoLista = listaSpesa[ i ];

  // So che ad ogni ciclo, listaSpesa[i] legge un valore diverso dal mio array

  // ad ogni ciclo, controllo se il valore che sto leggendo in questo momento
  // quindi il valore che corrisponde alla posizione i nel mio array,
  // è uguale a quello che sto cercando

  // if ( listaSpesa[ i ] === "pasta" ) {
    if ( elementoLista === "pane" ) {
        trovato = true;
        console.log( elementoLista + " si trovato alla posizione " + i );
    }
}

// Se ho trovato l'elemento che cercavo, mostro qualcosa sull'html, 
// altrimenti mando una alert che informa del fatto che non ho trovato quello che cercavo.
if ( trovato === true ) {
  // if ( trovato ) {
  // nel ciclo for è stato trovato l'elemento 
  // stampo qualcosa in html
    const titleEl = document.querySelector( ".title" );

    titleEl.innerHTML = ("La tua lista della spesa contiene l'elemento cercato.");

} else {
  // non è stato trovato
  // mostro un alert
    alert( "L'elemento cercato non è stato trovato" );
}