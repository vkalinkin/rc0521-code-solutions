/* exported filterOutNulls */
function filterOutNulls(values) {
  var filtered = [];
  for (var a = 0; a < values.length; a++) {
    if (values[a] !== null) {
      filtered.push(values[a]);
    }
  }
  return filtered;
}
