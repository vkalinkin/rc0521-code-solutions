const fs = require('fs');
const express = require('express');
const app = express();
const notes = require('./data.json');

app.get('/api/notes', function (req, res) {
  const outputArray = [];
  const notesData = notes.notes;
  for (const property in notesData) {
    outputArray.push(notesData[property]);
  }
  res.json(outputArray);
});

app.use(express.json());

app.get('/api/notes/:id', function (req, res) {
  const currentId = req.params.id;
  const notesData = notes.notes;
  const integerId = parseInt(currentId);

  if (integerId < 0 || isNaN(integerId)) {
    const error = 'id must be a positive integer';
    const returnError = { error };
    res.status(400).json(returnError);
  } else {
    if (notesData[currentId]) {
      const returnNote = notesData[currentId];
      res.status(200).json(returnNote);

    }
    if (!notesData[currentId]) {
      const error = `cannot find note with id: ${currentId}`;
      const returnError = { error };
      res.status(404).json(returnError);
    }
  }
});

app.post('/api/notes', function (req, res) {
  const message = req.body;
  const msg = message.content;
  if (!msg) {
    const error = 'content is a required field';
    const returnError = { error };
    res.status(400).json(returnError);
  } else {
    const currentId = notes.nextId;
    const newNoteObject = {};
    newNoteObject.id = currentId;
    newNoteObject.content = msg;

    notes.notes[currentId] = newNoteObject;
    notes.nextId++;

    const newData = JSON.stringify(notes, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        const error = 'An unexpected error occured.';
        const returnError = { error };
        res.status(500).json(returnError);
      }
      res.status(201).json(newNoteObject);
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const currentId = req.params.id;
  const integerId = parseInt(currentId);
  const notesData = notes.notes;

  if (integerId < 0 || isNaN(integerId)) {
    const error = 'id must be a positive integer';
    const returnError = { error };
    res.status(400).json(returnError);
  } else {

    if (notesData[currentId]) {
      delete notesData[currentId];
      const newData = JSON.stringify(notes, null, 2);
      fs.writeFile('data.json', newData, 'utf8', err => {
        if (err) {
          const error = 'An unexpected error occured.';
          const returnError = { error };
          res.status(500).json(returnError);
        }
        res.sendStatus(204);
      });
    } else {
      const error = `cannot find note with id: ${currentId}`;
      const returnError = { error };
      res.status(404).json(returnError);
    }
  }
});

app.put('/api/notes/:id', function (req, res) {
  const currentId = req.params.id;
  const integerId = parseInt(currentId);
  const notesData = notes.notes;
  const message = req.body;
  const msg = message.content;

  if (integerId < 0 || isNaN(integerId)) {
    const error = 'id must be a positive integer';
    const returnError = { error };
    res.status(400).json(returnError);
  } else if (msg === undefined) {
    const error = 'content is a required field';
    const returnError = { error };
    res.status(400).json(returnError);
  } else {

    if (notesData[currentId]) {
      delete notesData[currentId];
      const newNoteObject = {};
      newNoteObject.id = currentId;
      newNoteObject.content = msg;

      notes.notes[currentId] = newNoteObject;

      const newData = JSON.stringify(notes, null, 2);

      fs.writeFile('data.json', newData, 'utf8', err => {
        if (err) {
          const error = 'An unexpected error occured.';
          const returnError = { error };
          res.status(500).json(returnError);
        }
        res.sendStatus(204);
      });
    } else {
      const error = `cannot find note with id: ${currentId}`;
      const returnError = { error };
      res.status(404).json(returnError);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
