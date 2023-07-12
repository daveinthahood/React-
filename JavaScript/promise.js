// Promise 
// vogliamo vedere se un utente è online o meno 
//partiamo dichiarando se l'utente è loggato perché da quello dipende il resto 

isUserLoggedIn(userId)
.then((userId) => getUserDetail(userId)) // se è online restituisci dei dettagli 
.then((details) => getUsername(details))
.catch((err) => console.log(err))

// quello che sta succedendo è che noi chiamiamo la funzione "isUserLoggedIn"
// in base al suo output si chiama la funzione successiva, cosi fino alla fine della catena 
// il catch entrerà in gioco solo se si rileva un errore nelle funzioni 


//! COSA è UNA PROMISE 
//! è un oggetto che agisce in modo asincrono 

// Esempio 

// una promise accetta una funzione che poi prenderà due callbacks che verranno richiamate a seconda se la promise sia stata risolta o meno
// Se la promise viene rigettata cè un errore
let ourPromise = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand > 0.5) {
        resolve(rand);
    } else {
        reject(rand);
    }
})

ourPromise
    .then((val) => console.log(val))
    .then((val) => val*4)  
    .catch((err) => console.error(err))


// Promise Chaining 

// la nostra promise usa due comportamenti diversi se il nostro utente è connesso o meno 
function isLoggedIn(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if(rand > 0.3) {
                resolve(userId);
            } else {
                reject(new Error("Not Logged in!"));
            }
        }, 500);
    })
}

// otteniamo i dettagli dell'utente 

function getUserDetail(details) {
    return new Promise((resolve, reject) => {
        if (userId < 5 ) {
            resolve(details)
        } else {
            reject(new Error("Not Logged in!"))
        }

    })
}