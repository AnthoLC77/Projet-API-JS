let movieNameEnter = document.getElementById("movie-name");
let btnSearch = document.getElementById("search-btn");

btnSearch.addEventListener("click", (e) => {
  console.log(movieNameEnter.value);
});

let getMovie = () => {
  let movieName = movieNameEnter.value;
  let url = "http://www.omdbapi.com/?t=${movieName}&apikey=${key}";

  if (movieName.length <= 0) {
    result.innerHTML =
      "<h3 class='msg'>S'il vous plait rentrer le nom d'un film.</h3>";
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Si le film existe dans la database
        if (data.response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster"
                <h2>${data.Title}</h2>
                <div class="rating"
                    <img src="images/star-icon.png">
                    <h4>${data.imdbRating}</h4>
                </div>
                <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                    <div>${data.Genre.split("/").join
                    ("<div></div>")}</div>
                </div>
            </div>
            `;
        }
      });
  }
};

