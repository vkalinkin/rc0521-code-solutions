var first = 10;
var second = 50;
var third = 4;

var maximumValue = Math.max(first, second, third);
console.log('Maxnimum value:', maximumValue);

var heroes = ['spider-man', 'batman', 'iron man', 'superman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas'
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell'
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien'
  }
];

var lastBook = library.pop();
console.log('Last book:', lastBook);

var firstBook = library.shift();
console.log('First Book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
// console.log('after push', library);
library.unshift(css);
// console.log('after unshift', library);
library.splice(1, 1);
console.log('Current library:', library);

var fullName = 'Victor Kalinkin';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
