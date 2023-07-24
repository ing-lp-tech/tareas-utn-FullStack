// carga de imagen
const doc = document.getElementById("uploadInput");
console.log(doc);
console.log("pattys");
doc?.addEventListener("change", function (event) {
  console.log("luis");
  var file = event.target.files[0];
  var imageContainer = document.getElementById("imageContainer");

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

      // Mostrar la imagen en el contenedor
      imgElement.onload = function () {
        imageContainer.innerHTML = ""; // Limpiamos cualquier contenido previo
        imageContainer.appendChild(imgElement); // Agregamos la imagen al contenedor
        imgElement.style.display = "block"; // Mostramos la imagen
      };
    };

    // Leer el archivo como una URL de datos
    reader.readAsDataURL(file);
  }
});
