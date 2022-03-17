function addMoviesToDom(movies) {
  const ulMovies = document.querySelector("#movies-list");
  // clear innerhtml
  ulMovies.innerHTML = " ";
  movies.map((m) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // create img tag and append to li
    const img = document.createElement("img");
    // add attributes to img
    a.target = "_blank";
    a.href = "https://www.imdb.com/title/" + m.imdbID;
    img.src = m.poster;
    a.appendChild(img);
    // append scr attribute to li tags
    li.appendChild(a);
    ulMovies.appendChild(li);
    return li;
  });
}

addMoviesToDom(movies);

function filterMovies(selectFilms) {
  console.log("Selected filter: ", selectFilms);
  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(`${selectFilms}`)
  );
  console.log(filterMovies);
  return filterMovies;
}

function filterLatestMovies() {
  const newMovies = movies.filter(function (obj) {
    return obj.year >= "2014";
  });
  console.log(newMovies);
  return newMovies;
}

// Create a function handleOnChangeEvent() with as argument the word "event" that fires when a change has been made by one of the radio buttons.
function handleOnChangeEvent(event) {
  const valueBtn = event.target.value;

  switch (valueBtn) {
    case "latest-movies":
      console.log("These are all films from 2014 or newer");
      addMoviesToDom(filterLatestMovies());
      break;
    case "avenger":
      console.log("These are all Avenger films");
      addMoviesToDom(filterMovies(valueBtn));
      break;
    case "x-men":
      console.log("These are all X-Men films");
      addMoviesToDom(filterMovies(valueBtn));
      break;
    case "princess":
      console.log("These are all Princess films");
      addMoviesToDom(filterMovies(valueBtn));
      break;
    case "batman":
      console.log("These are all Batman films");
      addMoviesToDom(filterMovies(valueBtn));
      break;
  }
}

// Select all radio buttons & attach an event listener.
const radioBtns = document.querySelectorAll('[name= "films"]');
radioBtns.forEach((btn) =>
  btn.addEventListener("change", (event) => handleOnChangeEvent(event))
);

// Click on h1 for all movie
const superheroesMovies = document
  .querySelector("h1")
  .addEventListener("click", function (event) {
    console.log(movies);
    return addMoviesToDom(movies);
  });

// Search bar event
const searchBar = document.querySelector("#search");

searchBar.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    const searchValue = searchBar.value;
    console.log("Your search: " + searchValue);
    const newVar = searchByWord(searchValue);
    addMoviesToDom(newVar);
  } else {
    return false;
  }
});

function searchByWord(wordInMovie) {
  return movies.filter((film) =>
    film.title
      .toLocaleLowerCase()
      .includes(wordInMovie.toString().toLocaleLowerCase())
  );
}
