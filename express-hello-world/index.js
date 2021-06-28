const express = require('express');
const app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log('Method property of req:', req.method);
  const sentMessage = res.send('Hello World');
  // eslint-disable-next-line no-console
  console.log('Send method of res:', sentMessage);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
