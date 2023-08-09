let text1 = "hola%20como%20estas,%20todo%20bien?";
let text2 = "hola%20como%20estas?";
let text3 = "hola%20";

/* let arr = [...text1];
console.log(arr); */

/* metodo forof */

/*
var array2 = [];
 for (const i of arr) {
  if (i !== ("%" || "2" || "0")) {
    if (i !== ("2" || "0")) {
      if (i !== "0") {
        array2.push(i);
      }
    }
  }
}
console.log(array2); */

/* metodo filter */
/* const result = arr.filter(filt);
function filt(i) {
  console.log(i);
  if (i !== ("%" || "2" || "0")) {
    if (i !== ("2" || "0")) {
      if (i !== "0") {
        return i;
      }
    }
  }
}
if (result.length) console.log(result.length); */

function tarea(text) {
  let arr = [...text];
  /* console.log(arr); */
  const result = arr.filter(filt);
  /*  console.log(result);
  console.log(result.toString());
  console.log(result.join("")); */
  result.filter((e) => e != ",");
  /* console.log(result.toString(), "filter"); */
  console.log("el codigo descifrado es " + result.join(""));

  if (result.length < 8) {
    console.log("el mje es corto");
  }
  if (result.length < 19 && result.length >= 8) {
    console.log("el mje es mediano");
  }
  if (result.length >= 19) {
    console.log("el mje es largo");
  }
}

function filt(i) {
  if (i !== ("%" || "2" || "0")) {
    if (i !== ("2" || "0")) {
      if (i !== "0") {
        return i;
      }
    }
  }
}
tarea(text1);
tarea(text2);
tarea(text3);

const textos = ["hola comos estas,todo bien?", "no me siento bien", "que mal"];
for (const i of textos) {
  if (i.length < 8) {
    console.log(i, ", el mje es corto");
  }
  if (i.length < 19 && i.length >= 8) {
    console.log(i, ", el mje es mediano");
  }
  if (i.length >= 19) {
    console.log(i, ", el mje es largo");
  }
}
