/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstNoSpaces = '';
  var secondNoSpaces = '';
  for (var a = 0; a < firstString.length; a++) {
    if (firstString[a] !== ' ') {
      firstNoSpaces += firstString[a];
    }
  }

  // console.log('first no spaces:',firstNoSpaces);

  for (var b = 0; b < secondString.length; b++) {
    if (secondString[b] !== ' ') {
      secondNoSpaces += secondString[b];
    }
  }

  // console.log('second no spaces:', secondNoSpaces);

  var firstArray = [];
  var secondArray = [];

  for (var c = 0; c < firstNoSpaces.length; c++) {
    firstArray.push(firstNoSpaces[c]);
  }

  var firstSorted = firstArray.sort();

  for (var d = 0; d < secondNoSpaces.length; d++) {
    secondArray.push(secondNoSpaces[d]);
  }

  var secondSorted = secondArray.sort();

  // console.log('first array:', firstSorted);
  // console.log('second array:', secondSorted);

  var finalFirst = '';
  for (var e = 0; e < firstSorted.length; e++) {
    finalFirst += firstSorted[e];
  }

  var finalSecond = '';
  for (var f = 0; f < secondSorted.length; f++) {
    finalSecond += secondSorted[f];
  }

  if (finalSecond === finalFirst) {
    return true;
  } else {
    return false;
  }

  // for (var e = 0; e < firstSorted.length; e++){
  //   if (firstSorted[e] !== secondSorted[e]){
  //     return false;
  //   }
  //   return true;
  // }

  // var equalCount = 0;
  // var currentFirstChar;
  // var currentSecondChar;

  // for (var e = 0; e < firstSorted; e++){
  //   currentFirstChar = firstSorted.charAt(e);
  //   currentSecondChar = secondSorted.charAt(e);
  //   if (currentFirstChar === currentSecondChar){
  //     equalCount += 1;
  //   }
  // }
  // console.log('equal count', equalCount);
  // console.log('firstSored.length', firstSorted.length);

  // if (equalCount === firstSorted.length){
  //   return true;
  // } else {
  //   return false;
  // }

  // if (firstSorted === secondSorted){
  //   return true;
  // } else {
  //   return false;
  // }

  // var firstSorted = '';
  // var secondSorted = '';

  // firstSorted = firstString.split('').sort().join('');
  // secondSorted = secondString.split('').sort().join('');

  // console.log('first sorted:', firstSorted);

  // console.log('second sorted:', secondSorted);

  // if (firstSorted === secondSorted){
  //   return true;
  // } else {
  //   return false;
  // }

  // for (var firstI = 0; firstI < firstNoSpaces.length; firstI++){
  //   var currentFirst = firstString[firstI];

  //   for (var secondI = 0; secondI < secondNoSpaces.length; secondI++){
  //     var currentSecond = secondNoSpaces[secondI];
  //     if (currentFirst === currentSecond){
  //        secondNoSpaces[secondI] = '';
  //        break;
  //     }
  //   }
  // }

  // if (secondNoSpaces === ''){
  //   output = true;
  // }

  // return output;

  // for (var a = 0; a < string.length; a++) {
  //   if (string[a] !== ' ') {
  //     noSpaces += string[a];
  //   }
  // }

}
