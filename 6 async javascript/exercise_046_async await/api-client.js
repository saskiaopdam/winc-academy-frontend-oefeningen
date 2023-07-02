const API_KEY = "051b27dc05868eb525f436c221904fd5";

async function getData() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=051b27dc05868eb525f436c221904fd5";
    const response = await fetch(apiUrl, { method: "GET" });
    const processedResponse = await response.json();
    return processedResponse;
  } catch (error) {
    alert(error);
  }
}

getData();
// .then(console.log);
