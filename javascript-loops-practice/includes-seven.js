/* exported includesSeven */
function includesSeven(array) {
  var hasSeven = false;
  for (var a = 0; a < array.length; a++) {
    var currentNumber = array[a];
    // var currentLength = currentNumber.length;
    if (currentNumber === 7) {
      hasSeven = true;
      break;
    }
    // console.log(currentNumber, currentLength)
    // console.log(currentNumber);
    // while(currentNumber > 0){
    //   var remainder = currentNumber % 10;
    //   if (remainder === 7){
    //     hasSeven = true;
    //     break;
    //   }
    //   currentNumber = currentNumber/10;
    // }
    // for (var b = 0; b < currentLength; b++){
    //   var currentDigit = currentNumber.charAt(a);
    //   console.log("current number:", currentNumber, "current digit:", currentDigit)
    //   if (currentDigit === '7'){
    //     hasSeven = true;
    //     // break;
    //   }
    // }
  }
  return hasSeven;
  // console.log('has seven:', hasSeven)
}

// var input = [12, 4, 17];
