const fs = require('fs');

function readFileContents(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

if (process.argv.length === 3) {
  const fileName = process.argv[2];
  readFileContents(fileName);

} else if (process.argv.length > 3) {
  for (let a = 2; a < process.argv.length; a++) {
    const currentFileName = process.argv[a];
    readFileContents(currentFileName);
  }
}
