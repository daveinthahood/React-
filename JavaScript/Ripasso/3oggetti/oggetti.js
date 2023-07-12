//! Cos'è un oggetto 

//? un oggetto è una collezione di dati in correlazione tra di loro 

const person = { //! proprietà 
    nome: "Luca",
    cognome: "Rossi",
    genere: "mascio",
    eta:26,
    interessi : ["snowbord", "basket"],
    indirizzo : {
        via: "via trecce",
        cap: "03039",
        pr: "rm",
    },
    saluta: function(){ //! metodo 
        console.log(`ciao sono ${person.name}`);
    }
}

//? i metodo sono le funzioni di oggetti, tutte le persone che creeremo avranno tutti la funzione saluta 

//! come leggere le proprietà 

console.log(person.name); //! con il punto accediamo alla proprietà 

//? Come prendere un sotto oggetto 

console.log(person.indirizzo.pr);

//! Dot notation e brancket notation 
//? la dot ci fa accedere tramite i punti 

//? braket 
//! la braket ci fa comodo quando dobbiamo prendere dinamicamente delle proprietà 

person["nome"] //! cosi si accede con la braket
person["interessi"] [1] //! cosi per prendere un determinato indice 


//! come aggiornare un oggetto 

person.nome = "paolo"; //! cosi abbiamo cambiato la proprietà nome nell'oggetto 

person.colorePreferito = "blue" //! aggiungiamo proprietà 

//! Parola This 

//? quando usiamo this facciamo riferimento allo stesso oggetto 
//! aggiorniamo l'oggetto di prima con this

const person = { //! proprietà 
    nome: "Luca",
    cognome: "Rossi",
    genere: "mascio",
    eta:26,
    interessi : ["snowbord", "basket"],
    indirizzo : {
        via: "via trecce",
        cap: "03039",
        pr: "rm",
    },
    saluta: function(){ //! metodo 
        console.log(`ciao sono ${this.name}`);
    }
}

//! se richiamiamo this lui capisce che è dentro l'oggetto persona e agisce di conseguenza 

