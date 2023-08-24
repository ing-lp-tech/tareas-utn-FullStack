/* 11) Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y 
devuelva el área del mismo*/

// calcularAreaTriangulo(5, 6)
//resultado 15

const calcularAreaTriangulo = (a, b) => {
  return (a * b) / 2;
};

console.log(calcularAreaTriangulo(5, 6));

/* 12)Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la 
palabra termina con el caracter. */

//igualLongitud(‘estufa’, 'a')
//true
const esElUltimoCaracter = (text, b) => {
  if (text.split("")[text.length - 1] === b) {
    return true;
  }
};

console.log(esElUltimoCaracter("estufa", "a"));

/* 13)Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique si tiene 8 
caracteres o más. */

//esValida('contraseniaMuySegura')
//true

const esValida = (text) => {
  if (text.split("").length > 8) {
    return true;
  } else {
    return false;
  }
};

console.log(esValida("contraseniaMuySegura"));

/* 14)Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad 
de palabras que posee */

//contarPalabras('javascript')
//1

const contarPalabras = (text) => {
  let arr = text.split(" ");
  return arr.length;
};

console.log(contarPalabras("hola luis como estas"));

/* 15)Definí una función capitalizar que reciba como argumento un string str y devuelva el mismo string 
con la primera letra en mayúscula */

//capitalizar('había una vez...')
//'Había una vez...'

const capitalizar = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
  /* let arr = text.split(" ");
    let newArr=[]
    for (let i of arr) {
        if(i==0){
            newArr.push
        }
    }
    return arr.length; */
};

console.log(capitalizar("había una vez..."));

/* 16)Definí una función obtenerPrimeraOracion que tome por parámetro un string str y devuelva la primera 
oración de dicho string */

//obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')
//'A mí no me preguntes, sólo soy una oración'

const obtenerPrimeraOracion = (text) => {
  let arr = text.split(",");
  return arr[0];
};

console.log(
  obtenerPrimeraOracion("A mí no me preguntes, sólo soy una oración")
);

/* 17)Definí una función  que reciba como argumento una contrasenia de solo numeros y 
devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud 
donde todos sus caracteres son astericos */

//ocultarContrasenia(123456)
//'******'

const ocultarContrasenia = (number) => {
  let num = number.toString();
  let str = [];
  for (let i of num) {
    console.log(i);
    str.push("*");
  }
  return str.join("");
};

console.log(ocultarContrasenia(123456));

/* 18)Definí una función obtenerExtension que tome por parámetro un string archivo con el formato 'nombre.extension' 
y devuelva la extensión del archivo */

//obtenerExtension('imagen.png')
//'png'

const obtenerExtension = (text) => {
  let aux = text.split("");
  console.log(aux);
  let str = [];
  let aux2 = false;
  let aux3 = 0;

  /*  for (let i of aux) {
    console.log(i, "i");
    if (i === ".") {
      console.log(i, "punto");
      aux2 = true;
      aux3 = i;
    }
    if ((aux2 = true)) {
      str.push(i);
      console.log(str, "str");
    }
  } */
  for (let i = 0; i < aux.length; i++) {
    const element = aux[i];
    if (aux[i] === ".") {
      console.log(i, "punto");
      aux2 = true;
      aux3 = i;
    }
  }
  for (let i = aux3; i < aux.length; i++) {
    const element = aux[i];
    str.push(aux[i]);
  }

  return str.join("");
};

console.log(obtenerExtension("imagen.png"));

/* 19)Definí una función esPuenteSeguro que tome por parámetro un string que represente a un puente que consista 
en caracteres numerales y espacios y nos indique si el puente está entero y es seguro atravesar */

//esPuenteSeguro('### ##')
//false */
