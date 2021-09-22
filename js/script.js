var moviesSection;
const api_key = "cc2fb20d03dc927d5576605d11dd1bed";
const api_url = "https://api.themoviedb.org/3/discover/movie?api_key=";
const image_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
function handleSearch() {
  var searchText = document.getElementById("search_input").value;
  alert(`// TODO searching movies: ${searchText}`);
  // TODO
}

window.onload = function () {
  moviesSection = document.getElementById("movies");
  LoadMovies();
};

function ClearList() {
  while (moviesSection.lastElementChild) {
    moviesSection.removeChild(moviesSection.lastElementChild);
  }
}

async function LoadMovies() {
  let url = `${api_url}${api_key}`;

  let page, total_pages, results;

  await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      page = json["page"];
      total_pages = json["total_pages"];
      results = json["results"];
    });
  RenderMovies(results);
}

function RenderMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let title = movie["title"];
    let rate = movie["vote_average"];
    let year = new Date(movie["release_date"]).getFullYear();
    let image = `${image_url}${movie["poster_path"]}`;

    const title_div = document.createElement("div");
    const rate_div = document.createElement("div");
    const details_div = document.createElement("div");
    const year_div = document.createElement("div");
    const img_div = document.createElement("div");
    const movieItem_div = document.createElement("div");
    const col_div = document.createElement("div");

    title_div.classList.add('title');
    title_div.innerHTML = title;

    rate_div.classList.add('rate');
    rate_div.innerHTML = rate;

    year_div.classList.add('year');
    year_div.innerHTML = year;

    details_div.classList.add('details');
    details_div.append(title_div);
    details_div.append(rate_div);

    img_div.classList.add('img');
    img_div.style["background-image"] = `url(${image})`;


    movieItem_div.classList.add('movie-item');
    movieItem_div.append(img_div);
    movieItem_div.append(details_div);
    movieItem_div.append(year_div); 
 
    col_div.classList.add('col');
    col_div.append(movieItem_div);
    moviesSection.append(col_div);
  }
}
