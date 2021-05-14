/* exported invert */
function invert(source) {
  var inverted = {};
  // var invertIndex = 0;

  for (var sourceKey in source) {
    var newValue = sourceKey;
    var newKey = source[sourceKey];

    // console.log('newValue:', newValue);
    // console.log('newKey:', newKey);

    inverted[newKey] = newValue;
    // invertIndex++;

    // console.log('inverted:', inverted, 'invertIndex:', invertIndex)
  }
  return inverted;
}
