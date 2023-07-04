coches = [
  { coche: "coche 1", descripcion: "descripcion 1" },
  { coche: "coche 2", descripcion: "descripcion 2" },
  { coche: "coche 3", descripcion: "descripcion 3" },
  { coche: "coche 4", descripcion: "descripcion 4" },
  { coche: "coche 5", descripcion: "descripcion 5" },
  { coche: "coche 6", descripcion: "descripcion 6" },
  { coche: "coche 7", descripcion: "descripcion 7" },
  { coche: "coche 8", descripcion: "descripcion 8" },
  { coche: "coche 9", descripcion: "descripcion 9" },
  { coche: "coche 10", descripcion: "descripcion 10" },
  { coche: "coche 11", descripcion: "descripcion 11" },
  { coche: "coche 12", descripcion: "descripcion 12" },
  { coche: "coche 13", descripcion: "descripcion 13" },
  { coche: "coche 14", descripcion: "descripcion 14" },
  { coche: "coche 15", descripcion: "descripcion 15" },
  { coche: "coche 16", descripcion: "descripcion 16" },
  { coche: "coche 17", descripcion: "descripcion 17" },
  { coche: "coche 18", descripcion: "descripcion 18" },
  { coche: "coche 19", descripcion: "descripcion 19" },
  { coche: "coche 20", descripcion: "descripcion 20" },
];

titulos = [
  "coche 1",
  "coche 2",
  "coche 3",
  "coche 4",
  "coche 5",
  "coche 6",
  "coche 7",
  "coche 8",
  "coche 9",
  "coche 10",
  "coche 11",
  "coche 12",
  "coche 13",
  "coche 14",
  "coche 15",
  "coche 16",
  "coche 17",
  "coche 18",
  "coche 19",
  "coche 20",
];

descripciones = [
  "descripción 1",
  "descripción 2",
  "descripción 3",
  "descripción 4",
  "descripción 5",
  "descripción 6",
  "descripción 7",
  "descripción 8",
  "descripción 9",
  "descripción 10",
  "descripción 11",
  "descripción 12",
  "descripción 13",
  "descripción 14",
  "descripción 15",
  "descripción 16",
  "descripción 17",
  "descripción 18",
  "descripción 19",
  "descripción 20",
];

function miFuncionArray() {
  coches.forEach((car) => {
    container.innerHTML = `
      ${container.innerHTML}
      <div class="card">
      <h1>${car.coche} </h1>
      <img src="./assets/coche.png" />
      <h2>${car.descripcion} </h2>
      </card>
    `;
  });
}

/* function miFuncionArray() {
  titulos.forEach((titulo) => {
    container.innerHTML = `
      ${container.innerHTML}
      <div class="card">
      <h1>${titulo} </h1>
      <img src="./assets/coche.png" />
      </card>
    `;
  });
  descripciones.forEach((descripcion) => {
    container.innerHTML = `
      ${container.innerHTML}
      <h2>${descripcion} </h2>
    `;
  });
} */

/* 
function miFuncion() {
  console.log("mi function");
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((json) => {
      printPokemons(json.results);
    });

  // Pinta todos los pokemos insertando un HTML dentro del #container
  function printPokemons(pokemons) {
    const container = document.getElementById("container");
    console.log("printPokemons");
    pokemons.forEach((pokemon) => {
      container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="./assets/coche.png" />
    <span>Nº.${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
    });
  }

  // En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
  // una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
  // así que le extraigo el ID a la URL
  function getPokemonId(url) {
    console.log("getPokemonId");
    return url
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");
  }
} */

/* // Obtenemos los datos de todos los pokemon
Fuente: https: fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((json) => {
    printPokemons(json.results);
  });

// Pinta todos los pokemos insertando un HTML dentro del #container
function printPokemons(pokemons) {
  const container = document.getElementById("container");
  console.log("printPokemons");
  pokemons.forEach((pokemon) => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="./assets/coche.png" />
    <span>Nº.${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getPokemonId(url) {
  console.log("getPokemonId");
  return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
}
 */
