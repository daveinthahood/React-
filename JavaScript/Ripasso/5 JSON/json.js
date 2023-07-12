//! Cosa è il JSON?
    //? Javascripy Object Notation, rappresenta una struttura di dati che riprende la sitassi degli oggetti di javascipt 

//! Struttura 
    //?  

//! Come otteniamo un JSON
    //? vecchia sintassi 
    let requestURL= './json.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        const classe = request.response;
        console.log(classe);
    }