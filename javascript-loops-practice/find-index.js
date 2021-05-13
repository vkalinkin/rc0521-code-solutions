/* exported findIndex */
function findIndex(array, value) {
  var output = -1;
  for (var a = 0; a < array.length; a++) {
    if (array[a] === value) {
      output = a;
      break;
    }

  }
  return output;
}
