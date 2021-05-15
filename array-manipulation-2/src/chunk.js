/* exported chunk */
function chunk(array, size) {
  var outputOuter = [];
  // var sliced = array.slice(0, size);
  // console.log('sliced;', sliced);

  // var a = 0;
  // var sliced = array.slice(a, size);
  // console.log(sliced);
  // var sliced2 = array.slice(2,4);
  // console.log('sliced2', sliced2)

  // for (var a = 0; a < array.size; a+= size + a + 1){
  //   var sliced = array.slice(a, size+1)
  //   outputOuter.push(sliced);
  //   console.log(sliced);
  // }
  // console.log('outputOuter', outputOuter);

  for (var a = 0; a < array.length; a) {
    var sliced = array.slice(a, a += size);

    // var sliced = array.slice(a, size);

    // size += size;
    // console.log('sliced', sliced);
    outputOuter.push(sliced);
  }
  return outputOuter;
}
