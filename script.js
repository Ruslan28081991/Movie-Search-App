const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
// const result = document.querySelector(".result");
const formNode = document.querySelector(".search");

const getInputValue = () => searchInput.value;

const getMovies = (e) => {
  e.preventDefault(); // меняем стандартное поведение браузера
  const inputValue = getInputValue();
  getApiMovies(inputValue);
};

const getApiMovies = async (inputValue) => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${inputValue}&apikey=29331bae`
    );
    const movies = await res.json();
    console.log(movies);
    renderMovies(movies);
  } catch (error) {
    console.log(error);
  }
};

const renderMovies = (data) => {
  const moviesEl = document.getElementById("movies");
  moviesEl.innerHTML = "";
  data.Search.forEach((movie) => {
    const container = document.createElement("div");
    container.className = "render__div";

    const img = document.createElement("img");
    img.className = "render__img";

    const title = document.createElement("h1");
    title.className = "render__title";
    title.innerText = `${movie.Title}`;

    const year = document.createElement("p");
    year.className = "render__year";
    year.innerText = `${movie.Year}`;

    const type = document.querySelector("p");
    type.className = "render__type";
    type.innerText = `${movie.Type}`;

    moviesEl.appendChild(container);
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(year);
    container.appendChild(type);
  });
};

formNode.addEventListener("submit", getMovies);
