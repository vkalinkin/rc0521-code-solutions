/* exported firstChars */
function firstChars(length, string) {
  var outputString = '';
  if (length > string.length) {
    length = string.length;
  }

  for (var a = 0; a < length; a++) {
    outputString += string[a];
  }

  return outputString;
}
