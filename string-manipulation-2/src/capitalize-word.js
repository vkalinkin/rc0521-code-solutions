/* exported capitalizeWord */
function capitalizeWord(word) {
  var outputWord = '';
  var lowercased = word.toLowerCase();
  if (lowercased === 'javascript') {
    outputWord = 'JavaScript';
  } else {
    outputWord += word[0].toUpperCase();
    for (var a = 1; a < word.length; a++) {
      outputWord += word[a].toLowerCase();
    }
  }
  return outputWord;

}
