/* exported getKeys */
function getKeys(object) {
  var keys = [];
  var count = 0;
  for (var key in object) {
    keys[count] = key;
    count++;
  }
  return keys;
}

// var luke = {
//   firstName: 'luke',
//   lastname: 'skywalker',
//   job: 'jedi',
//   home: 'tatooine'
// }
