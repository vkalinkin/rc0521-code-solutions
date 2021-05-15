/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringArray = [];
  var outputString = '';
  stringArray = string.split(' ');
  // return stringArray;

  for (var a = 0; a < (stringArray.length - 1); a++) {
    var currentWord = stringArray[a];
    var currentWordCorrect = currentWord[0].toUpperCase();

    for (var b = 1; b < currentWord.length; b++) {
      currentWordCorrect += currentWord[b].toLowerCase();
    }
    outputString += currentWordCorrect + ' ';
  }

  var lastWord = stringArray[stringArray.length - 1];
  var lastWordCorrect = lastWord[0].toUpperCase();

  for (var c = 1; c < lastWord.length; c++) {
    lastWordCorrect += lastWord[c].toLowerCase();
  }

  outputString += lastWordCorrect;

  return outputString;
  // console.log(outputString)
  // console.log('last word:', lastWord)
}
