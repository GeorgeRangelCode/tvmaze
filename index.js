const API = "http://api.tvmaze.com/shows";
const element = document.getElementById("tvshows");

function getData(urlApi) {
  fetch(urlApi).then(response => {
    response.json().then(data => {
      let output = data
        .slice(0, 16)
        .map(function(show) {
          return `
          <article class="show-card">
            <img src="${show.image.medium}" alt="${show.name}" />
            <h2>${show.name}</h2>
          </article>
          `;
        })
        .join("");
      element.innerHTML = output;
    });
  });
}

getData(API);
