//! La prima cosa per operare in OOP andiamo a creaare un template dell'oggetto 
//? astrazione = prendiamo il concetto reale ed andiamo a prendere i punti in comune 
//? una volta che abbiamo il template possiamo creare delle instaze. 


//! il costruttore è una funzione che ci permette di andare a costruire un oggetto 

function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.bio = function(){
        console.log(`${this.nome} ${this.cognome}  ${(this.genere == "maschio") ? 'è un ragazzo' :'è una ragazza'} di ${this.eta} anni a cui piace ${this.interessi.join(",")}`);
    };
    this.saluta= function() {
        console.log(`Ciao sono ${this.nome}`);
    };
}
//! istanza dell'oggetto
const persona1 = new Persona("Luca", "Rossi", 23, "maschio", ["calcio", "basket"]);
const persona2 = new Persona("Anna", "Rossi", 60, "femmina", ["danza"])

console.log(persona1);
console.log(persona2);

persona1.bio("")
persona2.saluta("")