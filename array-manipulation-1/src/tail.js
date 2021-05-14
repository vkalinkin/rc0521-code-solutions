/* exported tail */
function tail(array) {
  var output = [];
  for (var a = 1; a < array.length; a++) {
    output[a - 1] = array[a];
  }
  return output;
}
