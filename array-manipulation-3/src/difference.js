/* exported difference */
function difference(first, second) {
  var output = [];
  for (var a = 0; a < first.length; a++) {
    var currentFirst = first[a];
    var firstInSecond = false;
    for (var b = 0; b < second.length; b++) {
      var currentSecond = second[b];
      if (currentFirst === currentSecond) {
        firstInSecond = true;
        break;
      }
    }
    if (firstInSecond === false) {
      output.push(currentFirst);
    }
  }

  for (var c = 0; c < second.length; c++) {
    var secondVar = second[c];
    var secondInFirst = false;
    for (var d = 0; d < first.length; d++) {
      var firstVar = first[d];
      if (secondVar === firstVar) {
        secondInFirst = true;
        break;
      }
    }
    if (secondInFirst === false) {
      output.push(secondVar);
    }
  }

  return output;

}
