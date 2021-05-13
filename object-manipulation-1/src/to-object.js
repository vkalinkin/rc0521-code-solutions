/* exported toObject */
function toObject(keyValuePair) {
  var outputObject = {};
  outputObject[keyValuePair[0]] = keyValuePair[1];
  return outputObject;
}
