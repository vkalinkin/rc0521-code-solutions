/* exported pick */
function pick(source, keys) {
  var outputObject = {};
  // var outputCount = 0;
  // for (var a = 0; a < keys.length; a++){
  //   var currentKey = keys[a];
  //   console.log('currentKey', currentKey, 'keys[a]', keys[a]);
  //   for (var b in source){
  //     console.log('var b', b, 'source', source);
  //     if (currentKey === b){
  //       outputObject[outputCount] = currentKey;
  //     }
  //   }
  // }

  // v    first loop goes thru the entire keys array
  for (var a = 0; a < keys.length; a++) {
    var currentKey = keys[a];

    // v iterate through all the keys in source
    for (var b in source) {

      if (currentKey === b && source[b] !== undefined) {
        outputObject[b] = source[currentKey];
      }

    }

  }

  return outputObject;
}
