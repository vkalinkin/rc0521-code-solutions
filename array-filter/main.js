const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
function divisibleBy2(num) {
  if (num === 0) {
    return true;
  } else if (num % 2 === 0) {
    return true;
  }
}

const evenNumbers = numbers.filter(divisibleBy2);
console.log('Numbers divisible by 2:', evenNumbers);

function checkOverFive(num) {
  if (num > 5) {
    return num;
  }
}

const overFive = numbers.filter(checkOverFive);
console.log('Numbers greater than 5:', overFive);

function beginsWithE(val) {
  if (val.startsWith('E')) {
    return val;
  }
}

const startsWithE = names.filter(beginsWithE);
console.log('Names that start with E:', startsWithE);

function includeD(val) {
  if (val.includes('D') || val.includes('d')) {
    return true;
  }
}
const haveD = names.filter(includeD);
console.log('Names that have the letter D:', haveD);
