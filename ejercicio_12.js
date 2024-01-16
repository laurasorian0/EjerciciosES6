// Crea una función llamada findArrayIndex que reciba como parametros un array de textos 
//y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:



function findArrayIndex(array, text) {
  let position = 0
  for (const name of array) {
    if (name === text) {
      return `La posición de "${text}" es ${position}`;
    }
    position += 1;
  }
  return `"${text}" no se encuentra en la lista introducida`
}
// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const lista2 = [
  "Laura",
  "Alba",
  "Macarena"
];

console.log(findArrayIndex(mainCharacters, "Luke"))
console.log(findArrayIndex(mainCharacters, "Laura"))
console.log(findArrayIndex(mainCharacters, "Obi-Wan"))
console.log(findArrayIndex(lista2, "Macarena"))