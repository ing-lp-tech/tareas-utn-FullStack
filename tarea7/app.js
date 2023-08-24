const cards = [
  {
    nombre: "Luis",
    nickname: "luis14",
    descripcion: "ingeniero jugador de futbol",
    id: 1,
  },
  {
    nombre: "Gabriel",
    nickname: "gabi37",
    descripcion: "Estudiante de ingenieria",
    id: 2,
  },
  {
    nombre: "Rosa",
    nickname: "rosi1",
    descripcion: "Negociante de ropa",
    id: 3,
  },
  {
    nombre: "Edilberto",
    nickname: "edi14",
    descripcion: "Negociante de ropa",
    id: 4,
  },
  {
    nombre: "Soledad",
    nickname: "sole",
    descripcion: "ingeniero jugador de futbol",
    id: 1,
  },
  {
    nombre: "Tatiana",
    nickname: "tati",
    descripcion: "Estudiante de ingenieria",
    id: 2,
  },
  {
    nombre: "Jose",
    nickname: "jos",
    descripcion: "Negociante de ropa",
    id: 3,
  },
  {
    nombre: "Milei",
    nickname: "javier",
    descripcion: "Negociante de ropa",
    id: 4,
  },
];

const btnToogle = document.getElementById("buttonToogle");
const nombre = document.getElementById("nombre");
const nickName = document.getElementById("nickName");
const descripcion = document.getElementById("descripcion");
const card = document.getElementById("card");
const containerCard = document.getElementById("containerCard");

const container = document.getElementById("container");

let isShowingCards = false;

function createCardElement(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const titleElement = document.createElement("h1");
  titleElement.textContent = card.nombre;

  const nickNameElement = document.createElement("h2");
  nickNameElement.textContent = card.nickname;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.descripcion;

  cardElement.appendChild(titleElement);
  cardElement.appendChild(nickNameElement);
  cardElement.appendChild(descriptionElement);

  return cardElement;
}

function toggleCardsDisplay() {
  if (!isShowingCards) {
    btnToogle.innerText = "Ocultar recomendados";
    container.style.display = "flex";

    cards.forEach((card) => {
      const cardElement = createCardElement(card);
      container.appendChild(cardElement);
    });

    isShowingCards = true;
  } else {
    btnToogle.innerText = "Mostrar recomendados";
    container.style.display = "none";
    container.innerHTML = ""; // Limpiar el contenido del contenedor
    isShowingCards = false;
  }
}

btnToogle.addEventListener("click", toggleCardsDisplay);

/* const btnToogle = document.getElementById("buttonToogle");
const nombre = document.getElementById("nombre");
const nickName = document.getElementById("nickName");
const descripcion = document.getElementById("descripcion");
const card = document.getElementById("card");
const containerCard = document.getElementById("containerCard");

const container = document.getElementById("container");

let aux = true;
let n = 0;

btnToogle.addEventListener("click", () => {
  if (aux === true) {
    btnToogle.innerText = "Ocultar recomendados";
    container.style.display = "flex";
    cards.forEach((card) => {
      console.log(card, n++);

      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const titleElement = document.createElement("h1");
      titleElement.textContent = card.nombre;

      const nickName = document.createElement("h2");
      nickName.textContent = card.nickname;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = card.descripcion;

      cardElement.appendChild(titleElement);
      cardElement.appendChild(nickName);
      cardElement.appendChild(descriptionElement);

      container.appendChild(cardElement);
    });
    aux = false;
  } else {
    container.style.display = "none";
    btnToogle.innerText = "Mostrar recomendados";
    
    for (let index = 0; index < cards.length; index++) {
      container.removeChild(container.children[0]);
    }
    aux = true;
    console.log(container);
  }
}); */

/* btnToogle.addEventListener("click", () => {
  cards.forEach((card) => {
    console.log(card, "card");

    nombre.innerText = card.nombre;
    nickName.innerText = card.nickname;
    descripcion.innerText = card.descripcion;
  });
});
 */
/* function muestrear() {
  cards.forEach((card) => {
    console.log(card, "card");
    containerCards.innerHTML = `
          ${containerCards.innerHTML}
          <div class="card">
          <h1>${card.nombre} </h1>
          <img src="./assets/coche.png" />
          <h2>${card.descripcion} </h2>
          </card>
        `;
  });
} */
