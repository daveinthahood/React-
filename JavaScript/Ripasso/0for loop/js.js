
let array = [23,13,45,4,8,6,9,12,8]

// //**! Voglio vedere tutti i numeri stampati  !**/
// //**? Senza i loop dovrei fare il console log di tutti gli indici  ?**/


// //**! all'inizio del ciclo inizializiamo una variabile e la facciamo partire da zero !**/
// //**! dopo c'è la condizione, finche i è minore di array lenght !**/
// //**! e poi c'è l'incremento del valore di i, aumenta ad ogni fine ciclo  !**/

for(let i = 0; i < array.length; i ++){
    if( array[i] == 56) {
        break;  
    }
    console.log(array[i]);
}

// //**! ciclo while e do while  !**/

let i = 0; //**? la variabile va inizializzata prima */

while(i < array.length){
    console.log(array[i]);
    i++;
}

//! Quale è la differenza tra il while ed il do while? !**

//! Il while ed il do while fanno la stessa cosa ma in modo diverso **! 
//! il do esegue il codice prima di verificare la condizione **! 
 let k = 0;
do{
    console.log(array[k]);
    k++;
} while(k < array.length)