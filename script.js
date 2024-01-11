const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
const result = document.querySelector(".result");

const getInputValue = () => searchInput.value;

const getMovies = () => {
  const inputValue = getInputValue();
  getApiMovies(inputValue);
};
console.log(movies);

const getApiMovies = async (inputValue) => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${inputValue}&apikey=29331bae`
    );
    const movies = await res.json();
    console.log(movies);
    // renderMovies(movies);
  } catch (error) {
    console.log(error);
  }
};

const renderMovies = (data) => {
  const container = document.createElement("div");
  container.className = "render__div";
  const img = document.createElement("img");
  img.className = "render__img";
  const title = document.createElement("h1");
  title.className = "render__title";
  // title.innerText = `${}`;
  const year = document.createElement("p");
  year.className = "render__year";
  // year.innerText = `${}`;
  const type = document.querySelector("p");
  type.className = "render__type";
  // type.innerText = `${}`;

  result.appendChild(container);
  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(year);
  container.appendChild(type);
};

searchBtn.addEventListener("click", getMovies);
