var library = [
  {
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    isbn: '123456789'
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    isbn: '987654321'
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    isbn: '321654987'
  }
];

// var test = [];
// var test2 = [1, 2, 3];

console.log('library contents:', library);
console.log('library\'s type:', typeof (library));
// console.log('test type:', typeof(test));
// console.log('test2 type:', typeof(test2));

var libraryString = JSON.stringify(library);
console.log('library as JSON string:', libraryString);
console.log('type of library as JSON string:', typeof (libraryString));

// name: Victor Kalinkin
// studentId: 123123007

var studentString = '{"name":"Victor Kalinkin","studentId":123123007}';
console.log('studentString:', studentString);
console.log('studentString\'s type:', typeof (studentString));

var studentJson = JSON.parse(studentString);
console.log('studentJson', studentJson);
console.log('type of studentJson', typeof (studentJson));
