//!** https://jsonplaceholder.typicode.com/comments

const $table = document.querySelector("#table");

const state = {
  data: [],
};

const fetchData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/comments");
    state.data = await result.json();
  } catch (error) {
    console.error("fetch doesn work");
  }
};

const generateTemplateHTML = (data) => {
  return `
        <tr>
        <td>${data.postId} </td>
        <td> ${data.id}</td>
        <td> ${data.name}</td>
        <td> ${data.email}</td>
        <td> ${data.body}</td>
        </tr>
    `;
};

const renderHTML = () => {
  const HTML = state.data.map((data) => generateTemplateHTML(data)).join("");
  $table.innerHTML = HTML;
};

const init = async () => {
  await fetchData();
  renderHTML();
};

init();
