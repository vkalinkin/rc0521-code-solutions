/* exported includes */
function includes(array, value) {
  var hasValue = false;

  for (var a = 0; a < array.length; a++) {
    var currentValue = array[a];

    if (currentValue === value) {
      hasValue = true;
    }
  }

  return hasValue;
}
