/* exported isVowel */
function isVowel(character) {
  var vowels = 'aeoiu';
  var isVowel = false;
  for (var a = 0; a < vowels.length; a++) {
    if (character.toLowerCase() === vowels[a]) {
      isVowel = true;
    }
  }
  return isVowel;
}
