function addMoviesToDom(movies) {
  const ulMovies = document.querySelector("#movies-list");
  // clear innerhtml
  ulMovies.innerHTML = "";
  movies.map((m) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // create img tag and append to li
    const img = document.createElement("img");
    // add attributes to img
    a.target = "_blank";
    a.href = " ";
    img.src = m.poster;
    a.appendChild(img);
    // append scr attribute to li tags
    li.appendChild(a);
    ulMovies.appendChild(li);
    return li;
  });
  // console.log(ulMovies);
}

addMoviesToDom(movies);

function filterMovies(selectFilms) {
  // FILTER Movies 2014 or newer
  const newMovies = movies.filter(function (obj) {
    return obj.year >= "2014";
  });
  console.log(newMovies);
  // FILTER Movies X-Men
  const arrayXMen = movies.filter(function (obj) {
    for (filter in obj) {
      if (obj[filter].includes("X-Men")) {
        return obj;
      }
    }
  });
  console.log(arrayXMen);
  // FILTER movies Avengers
  const arrayAvengers = movies.filter(function (obj) {
    for (key in obj) {
      if (obj[key].includes("Avengers")) {
        return obj;
      }
    }
  });
  console.log(arrayAvengers);
  // FILTER movies Princess
  const arrayPrincess = movies.filter(function (obj) {
    for (key in obj) {
      if (obj[key].includes("Princess")) {
        return obj;
      }
    }
  });
  console.log(arrayPrincess);
  // FILTER movies Batman
  const arrayBatman = movies.filter(function (obj) {
    for (key in obj) {
      if (obj[key].includes("Batman")) {
        return obj;
      }
    }
  });
  console.log(arrayBatman);
};


// Create a function handleOnChangeEvent() with as argument the word "event" that fires when a change has been made by one of the radio buttons.
function handleOnChangeEvent(event) {
  const valueBtn = event.target.value;
  // // step 1 : give event to filterMovies(wordInMovie)
  filterMovies();
  handleOnChangeEvent("event");

  switch (valueBtn) {
    case "Latest-movies":
      filterMovies(wordInMovie);
      console.log("Hey I am a new film");
    case "X-Men-films":
      addMoviesToDom(wordInMovie);
      console.log("Hey I am a X-Men film");
    case "Avenger-films":
      addMoviesToDom(wordInMovie);
      console.log("Hey I am a Avengers film");
    case "Princess-films":
      addMoviesToDom(wordInMovie);
      console.log("Hey I am a Princess film");
    case "Batman-films":
      addMoviesToDom(wordInMovie);
      console.log("Hey i am a Batman film");
  };
}

// Select all radio buttons & attach an event listener.
const radioBtns = document.querySelectorAll('[name= "films"]');
radioBtns.forEach((btn) =>
  btn.addEventListener("change", (event) => handleOnChangeEvent(event))
);

function movieInImdb() {
  const imdbData = [...new Set(movies.map((film) => film.imdbID))];
  const urlImdb = "https://www.imdb.com/title/";
  imdbData.forEach(function (item) {
    const filmUrl = urlImdb + item;
    console.log(filmUrl);
  });
}
movieInImdb();

