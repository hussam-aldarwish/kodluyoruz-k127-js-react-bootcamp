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
  console.log(results);
  RenderMovies(results);
}

function RenderMovies(movies) {
}
