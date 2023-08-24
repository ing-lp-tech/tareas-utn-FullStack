/* ejrcicio 13 */
const array13 = [1, 2, 3, 4];

const function13 = function (array) {
  console.log(array, "array");
  let suma = 0;
  for (const i of array) {
    suma += i;
  }

  return suma;
};
console.log(function13(array13));

/* ejercicio 14 */
const array14 = ["hola", " luis", ",como estas?"];

const function14 = function (array) {
  let conca = array.join("");
  return conca;
};
console.log(function14(array14));

/* ejercicio 15 */
const array15 = [1, 3, 5, 9, 11, 24, 45, 55];

const function15 = function (array) {
  let newArray = [];
  for (const i of array) {
    if (i > 10) {
      newArray.push(i);
    }
  }
  return newArray;
};
console.log(function15(array15), "function15");

/* ejercicio 16 */
const array16 = [1, 2, 4, 6, 3, 5, 9, 11, 24, 45, 55];

const function16 = function (array) {
  let newArray = [];
  for (let i of array) {
    if (i % 2 == 0) {
      newArray.push(i);
    }
  }
  return newArray;
};
console.log(function16(array16), "function 16");

//////clase////////
const suma = (int1, int2) => int1 + int2;

const resta = (int1, int2) => int1 - int2;

const operacion = (op, a, b) => {
  if (op == "+") {
    return suma(a, b);
  } else if (op == "-") {
    return resta(a, b);
  } else {
    return null;
  }
};

const saludar = (nombre) => "Hola " + nombre;

/////
