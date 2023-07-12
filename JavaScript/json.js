// JSON Methods

// come javascript può analizzare gli oggetti json e trasformarli in stringhe
// potremmo avere un json da una API e trasformarlo in stringa, salvarlo in un file e inviarlo da un'altra parte

//STRINGIFY METHON e PARSE METOD

class Child {
  age;
  name;
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  toJSON() {
    // con questa funzione andiamo a specificare che vogliamo che ci torni solo il nome
    return this.name;
  }
}

let json = {
  name: "Sally",
  birthday: new Date(1987, 10, 13),
  children: [new Child(4, "Billy"), new Child(3, "Sally Jr.")],
};

// vogliamo comprimere questo json in una stringa cosi successivamente possiamo salvarlo in locale
// funzione json.stringify

let str = JSON.stringify(json); // in questa funzione andiamo a richiamare la variabile dell'oggetto che vogliamo trasformare in stringa
console.log(str);

// Trasformiamo una stringa in un JSON

let obj = JSON.parse(str);
console.log(obj["name"]); // cosi ci ritornerà solo il nome
console.log(typeof obj["name"]); // controlliamo il tipo della variabile



//---------------------- TEMPLATE STRINGS
// MANIPOLAZIONE DI STRINGHE

// class Person {
//   name = "";
//   age = 0;
//   constructor(name, age) {
//     this.name = name;
//     if (typeof age === "number") {
//       this.age = age;
//     } else {
//       this.age = Number(age);
//     }
//   }

//   sayAge() {
//     return "I am " + this.age + "years old";
//   }
// }

// let susan = new Person ("Susan", 35);
// let baby = new Person("Susan Jr", 1)

// console.log(susan.sayAge()); // qui stampera Susan 35 anni
// console.log(baby.sayAge());

//--------------------------------------------------------------------------------------------------------------------//

// riscriviamo usando la manipolazione della stringa 
// nel return di say age metteremo i backtips con questa forma aggiuntiva "${this.age}"

// Se andassimo a stampare l'età del bambino invece ci sarà un problema per quanto riguarda la parola years, dobbiamo aggiungere del codice
// cosi il return a riga 55 diventerà : 
// return I am ${this.age} ${this.age === 1 ? "year" : "years "} old 
// cosi diciamo che se il numero è uguale ad uno userà la parola year mentre per il resto usera years `

class Person {
    name = "";
    age = 0;
    constructor(name, age) {
      this.name = name;
      if (typeof age === "number") {
        this.age = age;
      } else {
        this.age = Number(age);
      }
    }
  
    sayAge() {
      return `I am ${this.age} ${this.age === 1 ? "year" : "years "} old `;
    }
  }
  
  let susan = new Person ("Susan", 35);
  let baby = new Person("Susan Jr", 1)
  
  console.log(susan.sayAge()); // qui stampera Susan 35 anni
  console.log(baby.sayAge());

  // multi line string 
  // con le "" le stringhe multilinea non funzionano
  let bigString = `
    questa è una stringa multilinea
    hello
    hello 
  
  `