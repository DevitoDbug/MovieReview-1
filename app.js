const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const container = document.querySelector(".container");
const innercontainer = document.querySelector("movie-list-container");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

//Array of the crime movies
const movies = [
  {
    type: 'CRIME',
    title: 'The Matrix',
    image: 'img/1.jpeg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },

  {
    type: 'CRIME',
    title: 'The Matrix',
    image: 'img/2.jpeg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },

  {
    type: 'CRIME',
    title: 'The Matrix',
    image: 'img/3.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },
  {
    type: 'CRIME',
    title: 'The Matrix',
    image: 'img/4.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  }
];

//Creating the movies class
const Collection = {
  genre: "CRIME",
  movies: movies
}



//Dynamic html
const contentc = document.querySelector('.content-container')

const container2 = `<div class="movie-list-container">
<h1 class="movie-list-title">${Collection.genre}</h1>
<div class="movie-list-wrapper">
  <div class="movie-list">
${
Collection.movies.map((movie)=>(
  `<div class="movie-list-item">
  <img class="movie-list-item-img" src="${movie.image}  " alt="">
  <span class="movie-list-item-title">${movie.title}</span>
  <p class="movie-list-item-desc">${movie.description}</p>
  <button class="movie-list-item-button">Watch</button>
  </div>`))
}
  
  </div>
  </div>
  </div>`

//updating to the html 
contentc.innerHTML += container2


