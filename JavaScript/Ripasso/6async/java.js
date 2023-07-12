

//**! PROGRAMMAZIONE ASINCRONA !**/
//**! COS'E' LA PROGRAMMAZIONE ASINCRONA **!/
//**? 


fetch("json.json").then(function(response){
    return response.json();
}) .then(function(json){
    classe=json;
    console.log('Dati', classe);
}) .catch(function(err){
    console.error("Fetch Problem" + err.message);
})

//!** Cosa sono le promise?**! 
//**? è una promessa di esecuzione del codice **/

//!! Sintassi delle Promise 
    //* Chaining 

    fetch("******")
     .then(response => {
        if(response.ok){
            return response.blob();
        } else {
            throw new Error("Errore")
        }
     })
     .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement("img");
        image.src = objectURL;
        document.body.ariaHasPopup(image);
     })
     .catch(error => {
        console.error("c'è un errore");
     })


     //!! Creare delle nostre Promise 
     //?? la promise ha una funzione all'interno da eseguire ed ha due parametri, resolve o reject 

     
