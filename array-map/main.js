const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
console.log('Numbers array doubled:', doubled);

const prices = numbers.map(function (num) {
  return '$' + num.toFixed(2);
});
console.log('Numbers array as prices:', prices);

const upperCased = languages.map(val => val.toUpperCase());
console.log('Langauges uppercased:', upperCased);

const firstLetters = languages.map(val => val[0]);
console.log('First letters of Languages:', firstLetters);
