/* exported isLowerCased */
function isLowerCased(word) {
  var lowerCaseCount = 0;

  for (var a = 0; a < word.length; a++) {
    var currentChar = word[a];
    var currentLower = word[a].toLowerCase();

    if (currentChar === currentLower) {
      lowerCaseCount++;
    }
  }

  if (lowerCaseCount === word.length) {
    return true;
  } else {
    return false;
  }
}
