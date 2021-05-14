/* exported compact */
function compact(array) {
  var output = [];
  var outputCounter = 0;

  for (var a = 0; a < array.length; a++) {
    // if (array[a] !== false && array[a] !== null && array[a] > 0 && array[a] !== undefined && array[a] !== "" && array[a] !== undefined){
    //   output[outputCounter] = array[a];
    //   outputCounter++;
    // }
    // console.log('current value', array[a])
    if (array[a]) {
      output[outputCounter] = array[a];
      outputCounter++;
      // console.log('passed')
    }
    // if (array[a] === false || array[a] === null || array[a] <= 0 || array[a] === undefined || array[a] === ""){
    //   console.log('filted out')
    // } else if (isNaN(array[a])) {
    //   console.log('NaN filtered')

    // } else {
    //   output[outputCounter] = array[a];
    //   outputCounter++;
    //   console.log('passed')
    // }
  }
  return output;
}
