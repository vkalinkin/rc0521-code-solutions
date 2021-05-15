/* exported truncate */
function truncate(length, string) {
  var outputString = '';
  for (var a = 0; a < length; a++) {
    outputString += string.charAt(a);
  }
  outputString += '...';
  return outputString;
}
