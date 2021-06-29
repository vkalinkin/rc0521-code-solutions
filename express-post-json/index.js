const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  const outputArray = [];
  for (const id in grades) {
    outputArray.push(grades[id]);
  }
  res.json(outputArray);
});

app.use(express.json());

app.post('/api/grades', function (req, res) {
  const gradeObject = {};

  gradeObject.id = nextId;
  gradeObject.name = req.body.name;
  gradeObject.course = req.body.course;
  gradeObject.score = req.body.score;

  grades[nextId] = gradeObject;
  nextId++;

  res.status(201).json(gradeObject);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
