/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordWithSuffix = [];
  for (var a = 0; a < words.length; a++) {
    wordWithSuffix.push(words[a] + suffix);
  }
  return wordWithSuffix;
}
