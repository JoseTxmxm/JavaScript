/*
*TODO: Define una función miFilter que reciba un array y una función callback
*/
function myFilter(arr, callback) {
  return arr.filter(callback);
}

function isGreaterThan5(num) {
  return num > 5;
}

let numbers = [11, 3, 5, 8, 34, 9];

console.log(myFilter(numbers, isGreaterThan5));