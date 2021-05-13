/* exported isUpperCased */
function isUpperCased(word) {
  var upperCaseCount = 0;

  for (var a = 0; a < word.length; a++) {
    var currentChar = word[a];
    var currentCapital = word[a].toUpperCase();
    // console.log(currentChar, currentCapital);
    if (currentChar === currentCapital) {
      upperCaseCount++;
    }
  }
  // console.log ('Upper count:',upperCaseCount, 'word length', word.length);
  if (upperCaseCount === word.length) {
    return true;
  } else {
    return false;
  }
}
