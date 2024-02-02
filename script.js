window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

let beerTemplate;
let beerContainer;

function init() {
  console.log("init");

  beerTemplate = document.querySelector(".beer_template");
  console.log("beer_template", beerTemplate);

  beerContainer = document.querySelector(".beer_container");
  console.log("beer_container", beerContainer);

  //starter med at hente dataen fra URL & then bruges til at kalde en funktion når dataten er hentet. Herefter laver man responset om til JSON//
  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    //
    .then(function (json) {
      showBeers(json);
    });
}

function showBeers(beerJSON) {
  console.log("Første json element", beerJSON[0]);

  let beerClone = beerTemplate.cloneNode(true).content;
  beerClone.querySelector(".beer_image").src = beerJSON[0].image_url;
  beerClone.querySelector(
    ".beer_image"
  ).alt = `picture of a ${beerJSON[0].name} beer`;
  beerClone.querySelector(".beer_name").textContent = beerJSON[0].name;
  beerClone.querySelector(".beer_tagline").textContent = beerJSON[0].tagline;
  beerClone.querySelector(".beer_description").textContent =
    beerJSON[0].description;

  beerContainer.appendChild(beerClone);
}
