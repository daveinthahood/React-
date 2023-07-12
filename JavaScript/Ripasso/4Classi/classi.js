
//! 


function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome, 
    this.cognome = cognome, 
    this.eta = eta, 
    this.genere = genere, 
    this.interessi = interessi;
}

function insegnante(nome, cognome, eta, genere, interessi, materia) {
    Persona.call(this, nome, cognome,eta,genere,interessi);

    this.materia = materia;
}



//! Classi dal 2015 

    class Persona { //! questa è la classe persona
        constructor(nome, cognome, eta, genere, interessi){
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
            this.genere = genere;
            this.interessi = interessi;
        }
    }

    //! estendiamo una classe 

    class Insegnante extends Persona {
        constructor(nome, cognome, eta, genere, interessi, materia) { //! aggiungiamo una
            super(nome, cognome, eta, genere, interessi) //! inseriamo i valori del costruttore della classe che è estesa

            this.materia = materia;
        }

        //! Get e Set 
        //? funzionano in coppia se ne manca uno l'altro non funziona

        get materia() {
            return this._materia;
        }

        set materia(nuovaMateria) {
            this._materia = nuovaMateria;
        }
    }