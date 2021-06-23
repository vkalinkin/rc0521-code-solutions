const fs = require('fs');

const randomNumber = Math.random().toString() + '\n';

const data = new Uint8Array(Buffer.from(randomNumber));
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
