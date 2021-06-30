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
  let foundId = false;
  const integerId = parseInt(currentId);

  if (integerId < 0 || isNaN(integerId)) {
    res.status(400).send('"error": "id must be a positive integer"');
  } else {
    for (const property in notesData) {
      if (property === currentId) {
        foundId = true;
        res.json(notesData[property]);
        fs.writeFile('data.json');
        break;
      }
    }
    if (foundId === false) {
      res.status(404).send(`"error": "cannot find note with id ${currentId}"`);
    }
  }
});

app.post('/api/notes', function (req, res) {
  const message = req.body;
  const msg = message.content;
  if (msg === undefined) {
    res.status(400).send('"error": "content is a required field"');
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
        return res.status(500).send('"error": "An unexpected error occurred."');
      }
      res.status(201).json(newNoteObject);
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const currentId = req.params.id;
  const integerId = parseInt(currentId);
  const notesData = notes.notes;
  let foundId = false;

  if (integerId < 0 || isNaN(integerId)) {
    res.status(400).send('"error": "id must be a positive integer"');
  } else {
    for (const property in notesData) {
      if (property === currentId) {
        foundId = true;
        delete notesData[currentId];
        const newData = JSON.stringify(notes, null, 2);
        fs.writeFile('data.json', newData, 'utf8', err => {
          if (err) {
            return res.status(500).send('"error": "An unexpected error occurred."');
          }
          res.sendStatus(204);
        });
        break;
      }
    }
    if (foundId === false) {
      res.status(404).send(`"error": "cannot find note with id ${currentId}"`);
    }
  }
});

app.put('/api/notes/:id', function (req, res) {
  const currentId = req.params.id;
  const integerId = parseInt(currentId);
  const notesData = notes.notes;
  const message = req.body;
  const msg = message.content;
  let foundId = false;

  if (integerId < 0 || isNaN(integerId)) {
    res.status(400).send('"error": "id must be a positive integer"');
  } else if (msg === undefined) {
    res.status(400).send('"error": "content is a required field"');
  } else {
    for (const property in notesData) {
      if (property === currentId) {
        foundId = true;
        delete notesData[currentId];
        const newNoteObject = {};
        newNoteObject.id = currentId;
        newNoteObject.content = msg;

        notes.notes[currentId] = newNoteObject;

        const newData = JSON.stringify(notes, null, 2);
        fs.writeFile('data.json', newData, 'utf8', err => {
          if (err) {
            return res.status(500).send('"error": "An unexpected error occurred."');
          }
          res.sendStatus(204);
        });
        break;
      }
    }
    if (foundId === false) {
      res.status(404).send(`"error": "cannot find note with id ${currentId}"`);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
