/*
*TODO: Define una función myReduce que reciba un array, una función callback y un valor inicial.
*/

function myReduce(arr, callback, initialValue) {
  // verifica si el array es vacío y no se ha especificado un valor inicial
  if (arr.length === 0 && !initialValue) {
    throw new Error("El arreglo está vacío y no se ha especificado un valor inicial");
  }

  // Establece el valor incial si no se ha especificado
  let value = initialValue || arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    const newValue = callback(value, currentValue);
    value = newValue;
  }
  return value;
}

// suma de arreglo de números
const arrayNumeros = [1, 2, 3, 4, 5];
console.log(myReduce(arrayNumeros, (acc, currentValue) => acc + currentValue));

// multiplicación de arreglo de números
const arrayNumerosMultiplicado = [1, 2, 3, 4, 5];
console.log(myReduce(arrayNumerosMultiplicado, (acc, currentValue) => acc * currentValue));

// concatenar cadenas
const arrayCadenas = ["Hola", "mundo"];
console.log(myReduce(arrayCadenas, (acc, currentValue) => acc + currentValue));

// resta de un arreglo de números
const arrayNumerosResta = [30, 10, 5, 2, 1];
console.log(myReduce(arrayNumerosResta, (acc, currentValue) => acc - currentValue));

