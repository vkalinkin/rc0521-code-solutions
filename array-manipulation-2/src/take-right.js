/* exported takeRight */
function takeRight(array, count) {
  var index = array.length - count;
  if (count > array.length) {
    index = array.length;
  }

  var output = [];
  for (index; index < array.length; index++) {
    output.push(array[index]);
  }
  return output;
}
