/* exported zip */
function zip(first, second) {
  var output = [];
  var outputLength;
  if (first.length > second.length) {
    outputLength = second.length;
  } else {
    outputLength = first.length;
  }

  for (var a = 0; a < outputLength; a++) {
    var currentArr = [];
    currentArr.push(first[a]);
    currentArr.push(second[a]);
    output.push(currentArr);
  }
  return output;
}
