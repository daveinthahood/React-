

//! la funzione ci permette di inserire sotto lo stesso nome il codice da fare**!


function pasta(){
    tiraFuoriPentola;
    mettiAcqua;
    lasciateBollire;
    metteteSale;
    mettetePasta;
    fateSugo;
}

//! una funzione si identifica con le parentesi tonde

function ciao(){
    console.log("ciao");
}

ciao(); //? invoochiamo la funzione


///* FUNZIONI ANONIME 

//! sono funzioni che non hanno nome 

const myButton = document.querySelector("button");

//? come vediamo la funzione non ha nome 
myButton.onclick = function(){
    alert("Hello")
}

///Scope e Conflitti 
//? lo scopo delle variabili dentro e fuori la funzione 
//! tutte le variabili fuori dalle funzioni sono variabili globali perché si possono usare ovunque 
//! se inseriamo la variabile dentro la funzione quella variabile esisterà solo dentro la funzione 

//! i parametri che passiamo dentro la funzione è quella cosa che si aspetta quando la invochiamo 
let name = "Davide";
function hello(name){ 
    console.log("name");
}

hello(name)

/// funzioni personalizzate 

//! 
let button = document.querySelector("button");
let title = document.querySelector("h1")
let nome = document.querySelector("input")

function saluta(name){ 
    title.innerHTML = "ciao" `${name}` //!gli stiamo dicendo di cambiare il contenuto 
}

button.addEventListener("click", () => { //! questo è l'evento
    saluta();
    
})


/// return 

//! Il return è quando vogliamo rimandare qualcosa a schermo 


function cubo(number){
    let result = number * number * number;
    console.log(result);
    return result; //! ultima cosa che deve esserci nella funzione
}

button.addEventListener("click", () => {
    cubo(number.value)
    title.innerHTML = cubo(number.value);
})

