const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = process.argv[2];
const b = process.argv[4];

if (process.argv[3] === 'plus') {
  add(a, b);
} else if (process.argv[3] === 'minus') {
  subtract(a, b);
} else if (process.argv[3] === 'times') {
  multiply(a, b);
} else if (process.argv[3] === 'over') {
  divide(a, b);
}
