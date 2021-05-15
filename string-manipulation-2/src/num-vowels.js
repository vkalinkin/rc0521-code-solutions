/* exported numVowels */
function numVowels(string) {
  var vowels = 'aeiou';
  var lower = string.toLowerCase();
  var vowelCount = 0;

  for (var a = 0; a < lower.length; a++) {
    var currentChar = lower[a];
    // var hasVowel = false;
    for (var b = 0; b < vowels.length; b++) {
      var currentVowel = vowels[b];
      if (currentChar === currentVowel) {
        // hasVowel = true;
        vowelCount += 1;
        break;
      }

    }
  }
  return vowelCount;

}
