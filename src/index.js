function searchMovie() {
  let domain = "https://www.omdbapi.com";
  let results = [];

  let movieTitle = document.querySelector(".movie-title-input").value;
  let query = `apikey=${app.apiKey}&s=${movieTitle}`;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let results = JSON.parse(xhttp.responseText).Search;

      let moviesRow = document.querySelector(".movies-row");
      moviesRow.innerHTML = "";

      results.map((result, key) => {
        let element = document.createElement("div");
        element.classList.add("col-12");
        element.classList.add("col-md-3");
        element.innerHTML = `
          <a href="./movie.html?id=${result.imdbID}" alt="${result.Title}">
            <img src="${result.Poster || "./src/assets/movies.jpg"}"
            class="img-fluid rounded" alt="${result.Title}" />
          </a>
          `;
        moviesRow.appendChild(element);
      });
    }
  };

  xhttp.open("GET", `${domain}?${query}`, true);
  xhttp.send();
}

init();
