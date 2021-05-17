/* exported reverseWords */
function reverseWords(word) {
  var wordArray = [];
  wordArray = word.split(' ');
  // console.log(wordArray);

  var outputArray = [];
  var finalOutput = '';

  for (var a = 0; a < wordArray.length; a++) {
    var wordReversed = '';
    var currentWord = wordArray[a];
    var last = currentWord.length - 1;

    for (last; last >= 0; last--) {
      wordReversed += currentWord[last];
      // console.log('word reversed:', wordReversed);
    }
    outputArray.push(wordReversed);
  }

  // return outputArray;
  var finalLength = outputArray.length;
  for (var b = 0; b < (finalLength); b++) {
    finalOutput += outputArray[b];

    if (b < finalLength - 1) {
      finalOutput += ' ';
    }
  }
  // finalOutput += outputArray[finalLength];

  return finalOutput;
}
