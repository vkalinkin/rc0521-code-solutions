/* exported drop */
function drop(array, count) {
  var outputArray = [];
  var a = count;
  for (a; a < array.length; a++) {
    outputArray.push(array[a]);
  }
  return outputArray;
}
