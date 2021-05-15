/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var first = string[firstIndex];
  var second = string[secondIndex];

  var output = '';

  // console.log('first', first, 'second', second);
  // var output = string;
  // output[firstIndex] = first;
  // output[secondIndex] = second;

  // console.log('output[firstIndex]', output[firstIndex]);
  // console.log('output[secondIndex]', output[secondIndex]);
  // // return output;
  // console.log(output);

  var stringArray = [];

  for (var a = 0; a < string.length; a++) {
    stringArray.push(string[a]);
  }

  stringArray[firstIndex] = second;
  stringArray[secondIndex] = first;

  for (var b = 0; b < string.length; b++) {
    output += stringArray[b];
  }

  return output;

}
