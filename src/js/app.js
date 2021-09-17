import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const pokemonCount = 10;
  const url =  `https://pokeapi.co/api/v2/pokemon?limit=10`;
    
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(pokemon => {
        const li = document.createElement('li')
        li.textContent = pokemon.name;
        ul.appendChild(li);
      })
    });



});
