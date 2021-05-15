/* exported take */
function take(array, count) {
  if (count > array.length) {
    count = array.length;
  }

  var outputArray = [];
  for (var a = 0; a < count; a++) {
    outputArray.push(array[a]);
  }
  return outputArray;
}
