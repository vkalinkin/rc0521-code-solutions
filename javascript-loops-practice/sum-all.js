/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var a = 0; a < numbers.length; a++) {
    sum += numbers[a];
  }
  return sum;
}
