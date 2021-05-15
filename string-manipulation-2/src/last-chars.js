/* exported lastChars */
function lastChars(length, string) {
  var outputString = '';
  var index = string.length - length;
  if (length > string.length) {
    index = 0;
  }

  for (index; index < string.length; index++) {
    outputString += string[index];
  }

  return outputString;
}
