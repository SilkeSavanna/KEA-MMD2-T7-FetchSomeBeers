window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

function init() {
  //starter med at hente dataen fra URL & then bruges til at kalde en funktion når dataten er hentet. Herefter laver man responset om til JSON//
  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    //
    .then(function (json) {
      console.log("json", json);
    });
}
