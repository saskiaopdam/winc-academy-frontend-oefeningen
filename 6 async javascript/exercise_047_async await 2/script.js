// DIT PARKEER IK MAAR EVEN VOOR EEN LATER MOMENT
// OVER EEN WEEK OF TWEE LUKT HET HOPELIJK WEL

async function awaitGetData() {
  try {
    const fetchedData = await getData();
    console.log(fetchedData); // is object, met daarin array "genres"

    const getMovieGenres = () => {
      const movieGenres = fetchedData.genres;
      console.log(movieGenres); // is array "genres"

      movieGenres.forEach((movieGenre) => {
        const movieGenresList = document.getElementById("movieGenres");
        // console.log(movieGenresList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        movieGenresList.appendChild(newLi);
        newLi.innerHTML =
          "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    getMovieGenres();
  } catch (error) {
    alert(error);
  }
}

awaitGetData();
// .then(console.log);

alert("Succes");

async function awaitGetMyTopMovie() {
  try {
    const fetchedData = await getMyTopMovie();
    console.log(fetchedData); // is object, met daarin o.a. array "movie_results"

    const getMovieResults = () => {
      const movieResults = fetchedData.movie_results;
      console.log(movieResults); // is array "movie_results"

      movieResults.forEach((movieResult) => {
        const myTopMovieList = document.getElementById("myTopMovie");
        // console.log(myTopMovieList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        myTopMovieList.appendChild(newLi);
        newLi.innerHTML = movieResult.title;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    getMovieResults();
  } catch (error) {
    alert(error);
  }
}

awaitGetMyTopMovie();

async function awaitGetTopRatedMovies() {
  try {
    const fetchedData = await getTopRatedMovies();
    console.log(fetchedData); // is object, met daarin o.a. array "results"

    const getTopRatedResults = () => {
      const topRatedResults = fetchedData.results;
      console.log(topRatedResults); // is array "result"

      topRatedResults.forEach((topRatedResult) => {
        const topRatedMoviesList = document.getElementById("topRatedMovies");
        // console.log(topRatedMoviesList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        topRatedMoviesList.appendChild(newLi);
        newLi.innerHTML = topRatedResult.title;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    getTopRatedResults();
  } catch (error) {
    alert(error);
  }
}

awaitGetTopRatedMovies();

async function awaitGet1975Movies() {
  try {
    const fetchedData = await get1975Movies();
    console.log(fetchedData); // is object, met daarin o.a. array "results"

    const get1975Results = () => {
      const from1975Results = fetchedData.results;
      console.log(from1975Results); // is array "result"

      from1975Results.forEach((from1975Result) => {
        const from1975MoviesList = document.getElementById("1975Movies");
        // console.log(from1975MoviesList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        from1975MoviesList.appendChild(newLi);
        newLi.innerHTML = from1975Result.title;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    get1975Results();
  } catch (error) {
    alert(error);
  }
}

awaitGet1975Movies();

// getTopRatedMovies();
// getTopRatedActionMovies();
