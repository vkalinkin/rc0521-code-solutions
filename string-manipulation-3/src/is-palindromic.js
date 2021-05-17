/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaces = '';
  for (var a = 0; a < string.length; a++) {
    if (string[a] !== ' ') {
      noSpaces += string[a];
    }
  }

  var halfway = (noSpaces.length) / 2;
  var noSpacesLength = noSpaces.length;

  var output = true;
  for (var b = 0; b < halfway; b++) {
    if (noSpaces[b] !== noSpaces[noSpacesLength - 1 - b]) {
      output = false;
      break;
    }
  }
  return output;
}
