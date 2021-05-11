/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var desc = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return desc;
}

// var luke = {
//   // firstName: 'Luke',
//   // lastName: 'Skywalker',
//   name: 'Luke Skywalker',
//   occupation: 'Jedi',
//   birthPlace: 'Tatooine'
// }

// var description = getDescriptionOfPerson(luke);
// console.log('Description:', description);
