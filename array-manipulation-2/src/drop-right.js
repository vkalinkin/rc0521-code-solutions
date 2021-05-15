/* exported dropRight */
function dropRight(array, count) {
  var a = 0;
  if (count > array.length) {
    a = array.length;
  }

  var output = [];
  for (a; a < (array.length - count); a++) {
    output.push(array[a]);
  }

  return output;
}
