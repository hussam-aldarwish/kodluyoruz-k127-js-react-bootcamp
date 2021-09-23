const base_url = "https://api.themoviedb.org/3";
const api_key = "api_key=cc2fb20d03dc927d5576605d11dd1bed";
const api_url = `${base_url}/discover/movie?${api_key}`;
const search_url = `${base_url}/search/movie?${api_key}`;
const image_base_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

// declare variable to store last fetched url, to allow pagination of search results
let last_url;

// declare variable to store required html elements
let moviesSection, pagination;

// Declare function to load movies on page load
window.onload = function () {
  moviesSection = document.getElementById("movies");
  pagination = document.getElementById("pagination");
  LoadMovies(api_url);
  last_url = api_url;
};

// Decalre function to fetch movies data from api endpoint
async function LoadMovies(url) {
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      RenderMovies(json.results);
      RenderPagination(json.page, json.total_pages);
    });
}

// Declare function to show movies on the movies section
function RenderMovies(movies) {
  moviesSection.innerHTML = "";
  movies.forEach((movie) => {
    let title = movie.title;
    let rate = movie.vote_average;
    let year = new Date(movie.release_date).getFullYear();
    let image =
      movie.poster_path != null
        ? `${image_base_url}${movie.poster_path}`
        : "./no-img.jpg";

    const col_div = document.createElement("div");
    col_div.classList.add("col");
    col_div.innerHTML = `
  <div class="movie-item">
    <div class="img" style="background-image: url(${image});"></div>
    <div class="details">
      <div class="name">${title}</div>
      <div class="rate ${GetRateClass(rate)}">${rate}</div>
    </div>
    <div class="year">${year}</div>
  </div>`;
    moviesSection.append(col_div);
  });
}

// Declare function to determine rate class name upon vote_average
function GetRateClass(rate) {
  switch (true) {
    case rate >= 7:
      return "good";
      break;
    case rate >= 4:
      return "moderate";
      break;
    default:
      return "low";
      break;
  }
}

// Declare function to initialize pagination section when movies data is recieved
function RenderPagination(page, total_pages) {
  pagination.innerHTML = "";

  // First Page
  const firstPage_el = document.createElement("li");
  firstPage_el.innerHTML = '<a href="#" onclick="GotoPage(1)">«</a>';

  // First Page
  const lastPage_el = document.createElement("li");
  lastPage_el.innerHTML = `<a href="#" onclick="GotoPage(${total_pages})">»</a>`;

  // Current Page
  let currentPage_el = document.createElement("li");
  currentPage_el.innerHTML = `<a href="#" class="active" onclick="GotoPage(${page})">${page}</a>`;

  // Determine number of previous pages upon current page, max = 3 preivous pages
  let prevPages = [];
  for (let i = page - 1; i > 0; i--) {
    if (prevPages.length < 3) {
      let element = document.createElement("li");
      element.innerHTML = `<a href="#" onclick="GotoPage(${i})">${i}</a>`;
      prevPages.push(element);
    } else break;
  }
  prevPages.reverse();

  // Determine number of next pages upon current page, max = 3 next pages
  let nextPages = [];
  for (let i = page + 1; i <= total_pages; i++) {
    if (nextPages.length < 3) {
      let element = document.createElement("li");
      element.innerHTML = `<a href="#" onclick="GotoPage(${i})">${i}</a>`;
      nextPages.push(element);
    } else break;
  }

  // Add page navigations to pagination element
  pagination.append(firstPage_el);
  prevPages.forEach((element) => {
    pagination.append(element);
  });
  pagination.append(currentPage_el);
  nextPages.forEach((element) => {
    pagination.append(element);
  });
  pagination.append(lastPage_el);
}


// Declare a function to change page number
function GotoPage(pageNumber) {
  let url = `${last_url}&page=${pageNumber}`;
  LoadMovies(url);
}

// Declare a function to search movies by title
function handleSearch() {
  let searchText = document.getElementById("search_input").value;
  let url =
    searchText != "" ? `${search_url}&query=${encodeURI(searchText)}` : api_url;
  LoadMovies(url);
  last_url = url;
}

// Declare a function to sort current movies
function Sort() {
  let category = document.getElementById("sort-category").value;
  if (category == "") {
    alert("Please choose sorting category!");
  } else {
    let dir = document.getElementById("sort-asc").checked ? "asc" : "desc";
    let url = `${api_url}&sort_by=${category}.${dir}`;
    LoadMovies(url);
    last_url = url;
  }
}

// Declare a function to unsort and reload movies
function CancelSorting() {
  let category = document.getElementById("sort-category");
  category.value = "";
  LoadMovies(api_url);
}
