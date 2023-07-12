//**! */ la prima cosa che faccio è prendere gli elementi che mi interessano 

const $table = document.querySelector("#table")

//**! */ dove gestiamo i dati ? Dentro lo state
//**! */ lo state è uno oggetto

const state = {
    posts: [], //**!inizializziamo il parametro come un array vuoto 
}

//**! */ creiamo una funzione che ci fa gestire i dati provenienti dall'esterno 
//**! */ questa è una funzione asincrona 
//**! */ quando lavoriamo in una funzione asincrona dobbiamo usare il blocco try catch 

const fetchData = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //**? */ qui va messo il link del server a cui fare la richiesta 
      const data = await response.json(); //**? */ stiamo aspettando che esegue
      state.posts = data; //**? */ stiamo salvando i dati dentro lo state  
    } catch (error) { 
        console.log(error);
    }
}

//**! funzione che renderizza l'html

const generateTemplateHTML = (post) => { //**? */ dentro l'arrow function deve esserci l'oggetto da trasformare in html 
    return `
       <tr>  
          <td>${post.id}</td>  
          <td>${post.userId}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
          <td>
            <button class="remove-row" data-id="${post.id}"> Delete </button>
          </td>
       </tr>
    `
}

const renderHTML = () => { //**? qui dentro generiamo l'HTML
    const HTML = state.posts.map((post) => generateTemplateHTML(post)).join("")  //**? */ il primo parametro di map è l'elemento che è nel nostro array //con Join prendiamo gli elementi dell'array e li unisce in una unica stringa
    $table.innerHTML=HTML; //**? */ posizioniamo quello che abbiamo generato nel nostro html
}

const init = async() => { //**?prima dobbiamo aspettare che fetch data prende dati dall'esterno e poi renderizza l'HTML
    await fetchData();
    renderHTML();

    //**? */ event listner delegate 
    //**? */ il target è l'elemento che subisce l'evento 
    //**? */ gli stiamo dicendo se il target nella lista delle classi ha la classe remove row, ma come faccio a capire se l'id è giusto? lo passo nel dataset 

    document.addEventListener("click", (event) => {
        const target = event.target
        if (target.classList.contains("remove-row")){
            const id = target.dataset.id; 
            state.posts = state.posts.filter((post) => post.id != id); //**? */ qui stiamo dicendo di prenderci tutti gli elementi tranne quello con l'id dove ho cliccato
            renderHTML()
        }
    })
}

init(); //**! */ Eseguiamo la funzione 
