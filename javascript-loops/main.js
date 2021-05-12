/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (var i = 1; i < 11; i++) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (var i = 2; i < 21; i += 2) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (var i = count; i <= times; i++) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(i, string.charAt(i));
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var double = 2 * (numbers[i]);
    doubled.push(double);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  }
  return values;
}

// var bart = {
//   name: 'Bart Simpson',
//   age: 10
// }

// var homer = {
//   name: 'Homer Simpson',
//   age: 39
// }
