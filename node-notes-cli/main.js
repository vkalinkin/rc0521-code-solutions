const fs = require('fs');

const noteData = require('./data.json');
const noteInfo = noteData.notes;

const option = process.argv[2];
const option2 = process.argv[3];

const writeToData = () => {
  const newData = JSON.stringify(noteData, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) throw err;
  });
};

const read = () => {
  for (const property in noteInfo) {
    console.log(`${property}: ${noteInfo[property]}`);
  }
};

const create = () => {
  let newId = noteData.nextId;
  noteInfo[newId] = option2;
  newId++;
  noteData.nextId = newId;
};

const deleteNote = () => {
  for (const property in noteInfo) {
    if (option2 === property) {
      delete noteInfo[option2];
      writeToData();
    }
  }
};

const update = () => {
  const updatedMessage = process.argv[4];

  for (const property in noteInfo) {
    if (option2 === property) {
      noteInfo[option2] = updatedMessage;
      writeToData();
    }
  }
};

switch (option) {
  case 'read':
    read();
    writeToData();
    break;

  case 'create':
    create();
    writeToData();
    break;

  case 'delete':
    deleteNote();
    writeToData();
    break;

  case 'update':
    update();
    writeToData();
    break;

  default:
    console.log(`Invalid input. To use the program enter one of the following four words (and any additional inputs):
    "read": prints out all of your saved messages with their matching note IDs
    "create": enter in your message as a string following this term to make a new note
    "delete": enter in the note ID following this term to delete the message with that ID
    "update": enter in the note ID and the new message string following this term to update one of your notes with a new message`);
    break;
}
