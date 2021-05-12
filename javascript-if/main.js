/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  return ((number % 2) === 0);
}

function startsWithJ(string) {
  return ((string.charAt(0)) === 'J');
}

function isOldEnoughToDrink(person) {
  return ((person.age) >= 21);
}

// var bart = {
//   name: 'Bart Simpson',
//   age: 10
// }

// var homer = {
//   name: 'Homer Simpson',
//   age: 39
// }

function isOldEnoughToDrive(person) {
  return ((person.age) >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the Warner Brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
