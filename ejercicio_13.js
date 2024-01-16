// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.
function removeItem(array, text) {
  array.splice(findArrayIndex(array, text), 1);
}

function findArrayIndex(array, text) {
  let position = 0
  for (const name of array) {
    if (name === text) {
      return position;
    }
    position += 1;
  }
  return `"${text}" no se encuentra en la lista introducida`
}

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
  "Macarena",
  "Anabel",
  "Sara"
];

removeItem(lista2, "Laura");
console.log(lista2);
removeItem(mainCharacters, "Leia");
console.log(mainCharacters);
removeItem(lista2, "Sara");
console.log(lista2);