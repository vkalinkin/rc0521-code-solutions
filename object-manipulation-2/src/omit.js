/* exported omit */
function omit(source, keys) {
  var outputObject = {};
  // var keysLength = keys.length;
  // for (var a = 0; a < keysLength; a++) {
  //   var currentKey = keys[a];

  //   for (var currentSourceKey in source){
  //     console.log('current key:', currentKey, 'current source key:', currentSourceKey);
  //     if (currentSourceKey === currentKey){

  //     } else {
  //       outputObject[currentSourceKey] = source[currentSourceKey];
  //     }
  //   }
  // }

  for (var key in source) {
    var isSourceKeyInKeys = false;
    // var outputCount = 0;

    for (var a = 0; a < keys.length; a++) {
      var currentKey = keys[a];
      if (key === currentKey) {
        isSourceKeyInKeys = true;
        break;
      }
    }

    if (isSourceKeyInKeys === false) {
      outputObject[key] = source[key];
      // outputCount++;
    }
  }

  return outputObject;
}
