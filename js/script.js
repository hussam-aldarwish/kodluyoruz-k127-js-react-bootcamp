var moviesSection;

function handleSearch() {
  var searchText = document.getElementById("search_input").value;
  alert(`// TODO searching movies: ${searchText}`);
  // TODO
}

window.onload = function () {
  moviesSection = document.getElementById("movies");
};

function ClearList() {
  while (moviesSection.lastElementChild) {
    moviesSection.removeChild(moviesSection.lastElementChild);
  }
}

function LoadMovies(){
    
}
