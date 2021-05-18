/* exported flatten */
function flatten(array) {
  var output = [];
  for (var a = 0; a < array.length; a++) {
    var current = array[a];
    if (Array.isArray(current)) {
      var currentArr = [];
      currentArr = current;

      for (var b = 0; b < currentArr.length; b++) {
        output.push(currentArr[b]);
      }
    } else {
      output.push(current);
    }
  }
  return output;
}
