/* exported ransomCase */
function ransomCase(string) {

  var outputString = '';
  var lower = string.toLowerCase();
  var upper = string.toUpperCase();

  for (var a = 0; a < string.length; a += 2) {
    outputString += lower.charAt(a);
    outputString += upper.charAt(a + 1);
  }
  return outputString;
}
