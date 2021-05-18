/* exported union */
function union(first, second) {
  for (var a = 0; a < second.length; a++) {
    var currentSecond = second[a];
    var secondInFirst = false;
    for (var b = 0; b < first.length; b++) {
      var currentFirst = first[b];
      if (currentSecond === currentFirst) {
        secondInFirst = true;
        break;
      }
    }

    if (secondInFirst === false) {
      first.push(currentSecond);
    }
  }
  return first;
}
