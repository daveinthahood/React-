console.log("script loaded!");
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(`Called after ${i+1} second(s)`), 1000 * (i+1)); // il numero è in millisecondi, per due secondi dobbiamo calcolarlo x1000 
    //in questo caso settiamo un timeout di un secondo ogni giro di ciclo 
}


//SET INTERVAL 
// viene eseguito per ogni intervallo 

setInterval(() => console.log("setInterval"), 1000);

let id = setInterval(() => console.log("Called setInterval"), 1000);
setTimeout(() => clearInterval(id), 5000)
// stiamo dicendo di cancellare quell'intervallo dopo 5 secondi 
// cosi risparmiamo presatazione e RAM 
// set timeout e set interval non avorano per tempi esatti 