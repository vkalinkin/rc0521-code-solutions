/* exported capitalize */
function capitalize(word) {
  var outputWord = '';
  outputWord += word[0].toUpperCase();
  for (var a = 1; a < word.length; a++) {
    outputWord += word[a].toLowerCase();
  }

  return outputWord;
}
