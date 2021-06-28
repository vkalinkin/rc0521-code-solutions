const express = require('express');
const app = express();

app.use(function (req, res) {
  // console.log('Method property of req:', req.method);
  // console.log('Send method of res:', res.send('Hello world!'));
});

app.listen(3000, () => {
  // eslint-diable-next line no-console
  // console.log('Express server listening on port 3000');
});
