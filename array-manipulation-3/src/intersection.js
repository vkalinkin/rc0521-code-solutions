/* exported intersection */
function intersection(first, second) {
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
    if (firstInSecond === true) {
      output.push(currentFirst);
    }
  }

  return output;
}
