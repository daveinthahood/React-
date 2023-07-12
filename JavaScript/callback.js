// codice asincrono e come funziona

//introduciamo il comportamento asincrono 

// callbacks
function repeat(callback, n) {
   let id =  setInterval(callback, 500);
   setTimeout(() => clearInterval(id),500* n )
}

repeat(() => console.log("hi"),3);

// Pyramid of doom 
// vogliamo una funzione che prende il nome dell'utente
// immaginiamo una applicazione che ha tanti nomi utente 
function getUserName(userId, callback){
    isUserLoggedIn(userId, (err, isLoggedIn) => {
        if(err){
            callback(err);
        } else {
            if (isLoggedIn){
                getUserDetail(userId, (err, userDetail) => {
                    if (err){
                        callback(err);
                    } else {
                        callback(userDetail.userName)
                    }
                })
            } else {
                console.error("user not logged in!");
            }
        }
    })
}
