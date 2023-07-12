 
//**?  ?**//

 class ObserverError extends Error {  //**! Stiamo creando una classe errore cambiandole in nome per renderla più specifica, con super chiamiamo il costruttore della classe error passandole i parametri  */
    constructor(message, code = 1001){
        super(message);
        this.code=code;
        this.name="ObserverError";
    }
 }

 class Observer {
    #events= []; //**! Chiave privata !**//

    constructor(){

    }

    emit = (name, ...args) => { //**! emit simula l'evento, vogliamo emettere un nome che simula l'evento ed i parametri da passare alla funzione, devono essere presi dalla callback !**/
        //**! Cerchiamo l'evento !**//
        if (typeof name !== "string") throw new ObserverError("Messaggio di Errore",1001)
        //**?  Cerchiamo l'evento in un'array = filter ?**//
        const _events = this.#events.filter((item) => item.name == name );
        if (_events.length > 0 ){
            _events.forEach((item) => item.callback(...args))
        }
    }

    on = (name, callback) => { //**! facciamo i controlli  !**//
        if (typeof name !== "string") throw new ObserverError("Messaggio di Errore", 1001);
        if (typeof callback !== "function") throw new ObserverError("Messaggio di Errore", 1001);
        this.#events.push({name, callback}) //**! pushiamo nel nostro array un oggetto !**// 
    }

    remove = (name) => {
        if (typeof name !== "string") throw new ObserverError("Messaggio di Errore", 1001);
        this.#events = this.#events.filter((item) => item.name != name )
    }
 }

 const observer = new Observer();
 observer.on("test", (name, age) => {
    console.log(name, age);
 })

 observer.emit("test", (name, age) => {
    log
 })