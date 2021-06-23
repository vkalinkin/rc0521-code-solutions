const fs = require('fs');

const messageText = process.argv[2] + '\n';

const data = new Uint8Array(Buffer.from(messageText));
fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
