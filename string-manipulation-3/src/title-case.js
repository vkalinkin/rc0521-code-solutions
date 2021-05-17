/* exported titleCase */
function titleCase(title) {
  var output = '';
  var lowerCased = title.toLowerCase();
  // console.log('lower cased:', lowerCased);
  var wordArray = [];
  wordArray = lowerCased.split(' ');
  // console.log('word array:', wordArray);

  var firstWord = wordArray[0];
  var finalFirst = '';

  if (firstWord === 'javascript') {
    finalFirst = 'JavaScript';

  } else if (firstWord === 'javascript:') {
    finalFirst = 'JavaScript:';

  } else if (firstWord === 'api') {
    finalFirst = 'API';

  } else if (firstWord === 'api:') {
    finalFirst = 'API:';

  } else {
    finalFirst += firstWord[0].toUpperCase();
    for (var a = 1; a < firstWord.length; a++) {
      finalFirst += firstWord[a];
    }
  }

  output += finalFirst + ' ';

  for (var b = 1; b < wordArray.length; b++) {
    var currentWord = wordArray[b];
    var currentCap = '';
    if (currentWord === 'for' || currentWord === 'and' || currentWord === 'or' ||
      currentWord === 'nor' || currentWord === 'but' || currentWord === 'a' || currentWord === 'an' ||
      currentWord === 'the' || currentWord === 'as' || currentWord === 'at' || currentWord === 'by' ||
      currentWord === 'in' || currentWord === 'of' || currentWord === 'on' || currentWord === 'per' ||
      currentWord === 'to') {

      currentCap += currentWord;
      output += currentCap + ' ';

    } else if (currentWord === 'javascript') {

      if (b === wordArray.length - 1) {
        output += 'JavaScript';
      } else {
        output += 'JavaScript ';
      }

    } else if (currentWord === 'javascript:') {

      if (b === wordArray.length - 1) {
        output += 'JavaScript:';
      } else {
        output += 'JavaScript: ';
      }

    } else if (currentWord === 'api') {

      if (b === wordArray.length - 1) {
        output += 'API';
      } else {
        output += 'API ';
      }

    } else if (currentWord === 'api:') {

      if (b === wordArray.length - 1) {
        output += 'API:';
      } else {
        output += 'API: ';
      }

    } else {
      currentCap += currentWord[0].toUpperCase();

      for (var c = 1; c < currentWord.length; c++) {
        currentCap += currentWord[c];
      }
      if (b === wordArray.length - 1) {
        output += currentCap;
      } else {
        output += currentCap + ' ';
      }
    }

  }

  var outputArray = [];

  for (var d = 0; d < output.length; d++) {
    var current = output[d];
    outputArray.push(current);
  }

  for (var e = 0; e < outputArray.length; e++) {
    var targetChar = outputArray[e];
    if (targetChar === ':') {
      var colonFix = outputArray[e + 2].toUpperCase();
      outputArray[e + 2] = colonFix;
      // console.log('colonFix', colonFix);
    }
    if (targetChar === '-') {
      var dashFix = outputArray[e + 1].toUpperCase();
      outputArray[e + 1] = dashFix;

    }
  }

  var final = '';
  for (var f = 0; f < outputArray.length; f++) {
    final += outputArray[f];
  }
  return final;
}
