// // // Destructuring Arrays

let arr = [1, 2, 3, 4];

// // //inseriamo tutti i valori del nostro array in un insieme di nuove variabili 
// // // questo ci permette di fare la destrutturazione di un array 

// // // riassegnamo i nostri elementi in nuove variabili, ciascuna avrà il proprio valore 
let [i, j, k, l] = arr
// abbiamo semplicemente ridefinito i valori, in questo caso la i = 1; j=2 ecc 
console.log(i); // questo console log sarà uguale a 1 
console.log(j); // = a 2
console.log(k); // = a 3 
console.log(l); // = a 4

// // // Se vogliamo ottenere solo il secondo valore possiamo fare cosi : 

let [_, j] = arr
console.log(j); // sarà uguale a 2  

// // - - - - ESEMPIO CON DUE KEY 
// // dichiariamo un oggetto 

let obj = {
    "key": 1, 
    "key2":2
}

// // // console.log(Object.entries(obj));
for (let entry in Object.entries(obj)) {
    let [key, val] = entry; //stiamo dicendo di prendere le chiavi ed i valori da obj
    obj[key] = val / 4; // stiamo modificando il valore del nostro oggetto 
}
console.log(obj) // avremo una nuova versione del nostro oggetto 



// // // Destructuring Oggetti 

let obj = {
    "key" : 1,
    "key1" : 2,
}

// // Vogliamo avere le due chiavi in una nuova variabile 

let {key, key1} = obj // ora abbiamo due variabili 
console.log(key);
console.log(key1); 

// // come ci assicuriamo che le chiavi sono effettivamente nell'oggetto?
if("key" in obj && "key1" in obj){
    let {key, key1} = obj // ora abbiamo due variabili 
    console.log(key);
    console.log(key1); 
}


// altro esempio 
// con la destrutturazione possiamo ridurre le informazioni 
// in questo oggetto ci interessano solo due chiavi 
let obj1 = {
    "key2": 3,
    "key3" :4 ,
    "nested": {
        "mult":5,
        "str":6,
    }
}

// function sum ({key2, key3}) { // la destrutturazione questa volta è stata fatta all'interno della funzione 
//     return key2 + key3
// }

// console.log(sum(obj1));

// in alternativa possiamo anche fare cosi 

function sum (obj1) {
    let {key2, key3} = obj1 
        return key2 + key3
}