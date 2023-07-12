// Try Catch

// ci consente di gestire errori ed eseguire codice quando questi errori vengono rilevati
// la cosa più comoda è che non interrompe l'esecuzione dell'applicazione

// emuliamo un errore

let obj = {
  key: 5,
};

function printNestedKey(obj) {
  try {
    if (obj.doesNotExist === undefined) {
      throw new Error("key doesn exist"); // con throw generiamo una nuova risposta all'errore // ci fa vedere l'errore specidico 
    }
    console.log(obj.doesNotExist.key);
  } catch (e) {
    console.log(e);
  } finally {
  }
}

try {
  obj.doesNotExist.nested = 5; // errore
} catch (error) {
  // cosi catturiamo l'errore
  console.error(error); // stampiamo l'errore
} finally {
  // finally funziona a prescindere che ci sia o meno l'errore
  console.log("always ran");
}
