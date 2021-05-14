/* exported initial */
function initial(array) {
  var output = [];
  for (var a = 0; a < (array.length - 1); a++) {
    output[a] = array[a];
  }
  return output;
}
