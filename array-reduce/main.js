const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = function (accumulator, currentValue) {
  return accumulator + currentValue;
};

console.log('Sum of Numbers array:', numbers.reduce(sum));

const product = function (accumulator, currentValue) {
  return accumulator * currentValue;
};

console.log('Product of Numbers array:', numbers.reduce(product));

const balance = function (accumulator, currentValue) {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else {
    return accumulator - currentValue.amount;
  }
};

console.log('Balance of Account array:', account.reduce(balance, 0));

const composite = function (accumulator, currentValue) {
  accumulator = Object.assign(accumulator, currentValue);
  return accumulator;
};

console.log('Composite result of Traits array:', traits.reduce(composite));
