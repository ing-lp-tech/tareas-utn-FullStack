/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  console.log("button");
}

// Modal login
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("modaL click");
  }
};

// Modal register
var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openLogin() {
  console.log("open login");
  document.getElementById("id01").style.display = "block";
  document.getElementById("uploadInput").style.display = "unset";

  // Obtener el elemento del input file
  const fileInput = document.getElementById("uploadInput");

  fileInput.value = "";

  /* // Crear un nuevo elemento del mismo tipo y reemplazar el original con él
  const nuevoInput = document.createElement("input");
  nuevoInput.type = "file";
  nuevoInput.id = "uploadInput";

  // Reemplazar el input original con el nuevo
  fileInput.parentNode.replaceChild(nuevoInput, uploadInput); */
}

// carga de imagen
const doc = document.getElementById("uploadInput");
doc?.addEventListener("change", function (event) {
  console.log("luis");
  const file = event.target.files[0];
  const imageContainer = document.getElementById("imageContainer");

  // Comprobar si se seleccionó un archivo
  if (file) {
    // Crear una instancia de FileReader
    var reader = new FileReader();

    // Cuando el archivo se haya leído correctamente
    reader.onload = function () {
      // Crear un elemento de imagen
      var imgElement = document.createElement("img");

      // Establecer el contenido del atributo src de la imagen como el resultado de la lectura del archivo
      imgElement.src = reader.result;
      console.log(imgElement.src, "imgElement.src");

      // Mostrar la imagen en el contenedor
      imgElement.onload = function () {
        imageContainer.innerHTML = ""; // Limpiamos cualquier contenido previo
        imageContainer.appendChild(imgElement); // Agregamos la imagen al contenedor
        imgElement.style.display = "block"; // Mostramos la imagen
      };
    };

    // Leer el archivo como una URL de datos
    reader.readAsDataURL(file);

    elem = document.getElementById("uploadInput");
    elem.style.display = "none";
  }
});

/* onclick="document.getElementById('id01').style.display='none'" */
function closeModal() {
  document.getElementById("id01").style.display = "none";

  console.log("close modal");
  imageContainer.innerHTML = "";
}

//function de wssp//
const tuNumeroDeTelefono = "tu_numero_de_telefono";

document.addEventListener("DOMContentLoaded", function () {
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/${+5491162020911}`;
});
