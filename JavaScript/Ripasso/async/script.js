//**! FUNZIONE FETCH  !**/
//**? COME SI ESEGUE UN CODICE ASINCRONO ?**/
//**! cosa è una promise? è una classe che ci permette di lavorare con il codice asincrono. Ci permette di aspettare che quella funzione esegue e ci cattura gli errori se ce ne saranno !**/

const fetchData = async () => { 
    try { //**? Esegiamo il codice */
       const respons = await fetch("** link a cui fare la chiamata **"); //**? Fetch si usa per fare le chiamate esterne  ?**
       //**? con await gli stiamo dicendo di aspettare fetch ?**/
       const result = await respons.json();//**? salviamo dentro ?**/ 
    } catch (error) { //**? se ci sono errori nel try ci cattura l'errore */
        console.log(error);
    } finally { //**? non è obbligatorio ?**//
        console.log("end");
    }
}

fetchData();