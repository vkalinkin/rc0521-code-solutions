/* exported equal */
function equal(first, second) {
  var equalStatus = true;
  if (first.length !== second.length) {
    equalStatus = false;
  } else {
    for (var a = 0; a < first.length; a++) {
      var firstVal = first[a];
      var secondVal = second[a];
      if (firstVal !== secondVal) {
        equalStatus = false;
        break;
      }
    }
  }

  return equalStatus;
}
