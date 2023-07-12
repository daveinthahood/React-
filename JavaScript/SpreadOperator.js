 // // // Spread Operator 

 // lo spread viene utilizzato per la creazione di un nuovo array / oggetto e quindi l'aggiunta di elementi a quell'array o a quell'oggetto 
 // quello che fa è assegnare valori da una struttura vecchia ad una nuova 

//  let arr = [1,2,3,4];

 let obj = {
    "key1":1,
    "key2":2,
    "nested":{
        "mult":4,
        "str":5,
    }
 }

//  // // creiamo un nuovo array che vuole includere anche quello vecchio 
//  // // abbiamo due modi per farlo 

//  let newArr = arr; // stiamo passando il riferimento e visto che il nuovo array è uguale a quello vecchio ogni modifica ricade su l'altro 
//  newArr.push(3);
//  console.log(newArr);

//  // come si uso lo spred 

//  let newArr = [...arr]; // cosi stiamo usando lo spread ed ogni elemento che aggiungere modo sarà presente solo sul newArr 
//  newArr.push(3);
//  console.log(newArr);

//  let newArr = [...arr, 3]; // visto che questo è un array possiamo anche inserire il nuovo valore direttamente nelle quadre, possiamo aggiungere tutti gli elementi che vogliamo sia prima che dopo il "...arr" 
//  console.log(newArr);

 // // creiamo un nuovo array da una funzione 

 function makeNewArray (arr) {
    return [...arr,1,2]
 }


 // // // spread con gli oggetti 

 let newObj = {...obj, "newKey":15};
 console.log(newObj);