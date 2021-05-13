/* exported filterOutStrings */
function filterOutStrings(values) {
  var filtered = [];
  for (var a = 0; a < values.length; a++) {
    if (values[a] + 0 === values[a]) {
      filtered.push(values[a]);
    }
  }
  return filtered;
}
