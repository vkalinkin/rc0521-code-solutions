/* exported unique */
function unique(array) {
  var output = [];
  if (array[0] !== undefined) {
    output.push(array[0]);
  }

  if (array.length > 1) {
    for (var a = 1; a < array.length; a++) {
      var current = array[a];
      var currentInOutput = false;
      // console.log('current:', current, 'currentInOutput', currentInOutput);

      for (var b = 0; b < output.length; b++) {
        var existing = output[b];
        // console.log('existing', existing);
        if (current === existing) {
          currentInOutput = true;
          break;
        }
        // console.log('currentInOutput', currentInOutput);
      }

      if (currentInOutput === false) {
        output.push(current);
      }
    }
  }

  return output;
}
