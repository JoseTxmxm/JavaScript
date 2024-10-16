/*
*TODO: define una funcion miMap() que reciba un array y una funcion de callback
*/
function miMap(arr, functionCallback) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument "arr" debe ser un arreglo.');
  }
  if (typeof functionCallback !== 'function') {
    throw new Error('Argument "functionCallback" debe ser una funcion.');
  }
  return arr.map(functionCallback);
}

let arrayDeElementos = [1, 2, 3, 4, 5];

miMap(arrayDeElementos, function(elemento) {
  // aqui se puede realizar el cambio que deseas
  console.log(elemento * 2);
});

/*
function miSumar(unArreglo) {
  return unArreglo.map(function(elemento){
    return elemento + 1;
  })
}
let numeros = [1, 2, 3, 4, 5];
console.log(miMap(numeros, miSumar));
*/