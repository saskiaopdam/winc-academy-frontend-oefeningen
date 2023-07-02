const API_KEY = "051b27dc05868eb525f436c221904fd5";

async function getData() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=051b27dc05868eb525f436c221904fd5";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin array "genres"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}

async function getMyTopMovie() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/find/tt6105098?api_key=051b27dc05868eb525f436c221904fd5&language=en-US&external_source=imdb_id";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin o.a. array "movie_results"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}

async function getTopRatedMovies() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/discover/movie?api_key=051b27dc05868eb525f436c221904fd5&with_genres=28&genre_ids=28&vote_average.gte=10";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin o.a. array "results"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}

async function get1975Movies() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/discover/movie?api_key=051b27dc05868eb525f436c221904fd5&primary_release_year=1975";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin o.a. array "results"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}
