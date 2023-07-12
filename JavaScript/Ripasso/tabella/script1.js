const $table = document.querySelector("#table");
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");

const state = {
  posts: [], // copia di rendering - è quello che dobbiamo renderizzare in pagina
  _posts: [], // copia di cache - è quello che ci fa gestire i cache
  paginationInfo: {
    page: 1,
    totalPages: 1,
    limit: 10, //quanti elementi per pagina voglio
    hasPrevPage: false, //Non ci sono pagine precedenti
    hasNextPage: false,
  },
};

/**! Rispetto alla pagina di prima abbiamo spostato il delegate sotto lo state !**/
/**! Anche se viene chiamato qui l'event listner funziona !**/

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("remove-row")) {
    const id = target.dataset.id;
    state.posts = state.posts.filter((post) => post.id != id);
    renderHTML();
  }
});

const fetchData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5500/song.json");
    if (response.ok) {
      /**! questo è un controllo !**/
      const data = await response.json();
      state.posts = data; /**! Abbiamo abbreviato il codice !**/
      state._posts = data;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};

//**! funzione manipulate !**//

const manipulateData = () => {
  const startIndex =
    state.paginationInfo.limit * (state.paginationInfo.page - 1); //**! è il nostro startIndex */
  state.posts = [...state._posts].splice(
    startIndex,
    state.paginationInfo.limit
  ); //**! gli stiamo dicendo che partendo dal nostro indice di partenza metti 10 elementi per pagina | splice elimina gli elementi dall'array */
  state.paginationInfo.totalPages = Math.ceil(
    state._posts.lenght / state.paginationInfo.limit
  ); //** stiamo dicendo che vogliamo arrotondare per eccesso il risultato della divisione */
  state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1; //** Abbiamo una pagina precedente quando la pagina è maggiore di uno */
  state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.limit;

  if (!state.paginationInfo.hasNextPage) {
    $next.setAttribute(disabled, true); //**!  Se non c'è la successiva pagina rimuovi il bottone */
  } else {
    $next.removeAttribute(disable);
  }
};

if (!state.paginationInfo.hasPrevPage) {
  $next.setAttribute(disabled, true); //**!  Se non c'è la precedente pagina rimuovi il bottone */
} else {
  $next.removeAttribute(disable);
}

const getData = async () => {
  //**? Prima li fetchiamo e poi manipoliamo */
  await fetchData();
  manipulateData();
};

const generateTemplateHTML = (post) => {
  return `
       <tr>  
          <td>${post.title}</td>  
          <td>${post.text}</td>
          
          
       </tr>
    `;
};

const renderHTML = () => {
  const HTML = state.posts.map((post) => generateTemplateHTML(post)).join("");
  $table.innerHTML = HTML;
};

const init = async () => {
  await getData(); //**! qui richiamiamo getdata invece di fetchdata */
  renderHTML();
};

//**! Event listner sugli elementi in pagina  !**/

const setEventListner = () => { //**!  */
  $next.addEventListener("click", () => {
    state.paginationInfo.page += 1;
    manipulateData();
    renderHTML();
  });
  $prev.addEventListener("click", () => {
    state.paginationInfo.page -= 1;
    manipulateData();
    renderHTML();
  });
};

init(); // Eseguiamo la funzione
setEventListner();
