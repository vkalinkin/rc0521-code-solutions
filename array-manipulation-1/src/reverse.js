/* exported reverse */
function reverse(array) {
  var reversed = [];

  for (var a = 0; a < array.length; a++) {
    reversed[array.length - a - 1] = array[a];
  }
  return reversed;
}
