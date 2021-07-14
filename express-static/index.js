const express = require('express');
const path = require('path');
const app = express();

const combinedPath = path.join(__dirname, 'public');
// console.log(combinedPath);

const staticMiddleware = express.static(combinedPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line-no-console
  console.log('Express server listerning on port 3000!');
});
