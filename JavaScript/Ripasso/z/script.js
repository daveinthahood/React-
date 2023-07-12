const $breads = document.querySelector("#breads")

const state = {
    data:[],
}

const fetchData = async () => {
    const response = await fetch("https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact");
      try {
        if (response.ok){ 
    state.data = await response.json();
        } else {
        error(response)
}
  } catch (error) {
    console.error("Fetch doesnt work", response);
  }
}

const generateTemplateHTML= (data) => {
    return `
    <tr>
        <td>${data.id}</td>  
        <td>${data.userId}</td>
        <td>${data.title}</td>
        <td>${data.body}</td>
        <td>
        <button class="remove-row" data-id="${data.id}"> Delete </button>
        </td>
 </tr>
    `;
}

const renderHTML= () => {
    const HTML = generateTemplateHTML(state.data);
    $breads.innerHTML = HTML;
}

const init = async () => {
    await fetchData();
    renderHTML();
}

init();