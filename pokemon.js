// DOM Objects
const pokeName = document.querySelector(".poke_name");
const pokeId = document.querySelector(".poke_id");
const pokeFrontImage = document.querySelector(".front_default");
const pokeBackImage = document.querySelector(".back_default")
const pokeType = document.querySelector(".types");
const pokeType1 = document.querySelector(".type_1")
const pokeType2 = document.querySelector(".types_2")
const pokeWeight = document.querySelector(".poke_weight");
const pokeHeight = document.querySelector(".poke_height")
/* First example 
let baseURL = "https://pokeapi.co/api/v2"
let query = "/pokemon/?offset=0&limit=151/id/ 
fetch(baseURL + query)
*/
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
  .then((res) => res.json())
  .then((json) => {
    let pokeNameArr = json.results;

    let randomPokemon =
      pokeNameArr[Math.floor(Math.random() * pokeNameArr.length)];
    console.log(randomPokemon);

    // Second fetch to access url data which was previously unavailable due to '?offset/limit.
    fetch(randomPokemon["url"])
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return displayResults(data);

        function displayResults(data) {
          // Giving context from the API to the HTML
          pokeName.textContent = data["name"];
          pokeId.textContent = data["id"];
          /* pokeType1.textContent = data["type"][0];
          pokeType2.textContent = data["type"][1];
          pokeType.textContent = data["types"][0]["type"]["name"];
          if (dataSecondType) {
            pokeTypeTwo.classlist.remove("hide");
            pokeTypeTwo.textContent = dataSecondType["type"]["name"];
          } else {
            pokeTypeTwo.classlist.add("hide");
            pokeTypeTwo.textContent = "";
            */
          pokeWeight.textContent = data["weight"];
          pokeHeight.textContent = data["height"]
          pokeFrontImage.src = data["sprites"]["front_default"];
          pokeBackImage.src = data["sprites"]["back_default"];
        }
      });
  });
