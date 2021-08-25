const takeAChance = require('./take-a-chance');

const returnedPromise = takeAChance('Victor Kalinkin');

returnedPromise.then(value => {
  console.log(value);
});

returnedPromise.catch(Error => {
  console.log(Error.message);
});
