/* exported getValues */
function getValues(object) {
  var values = [];
  // var count = 0;
  for (var value in object) {
    // values[count] = object[value];
    // count++;
    values.push(object[value]);
  }
  return values;
}
