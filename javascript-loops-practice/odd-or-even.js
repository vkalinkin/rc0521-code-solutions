/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenArray = [];
  for (var a = 0; a < numbers.length; a++) {
    if (numbers[a] % 2 === 0) {
      oddEvenArray.push('even');
    } else {
      oddEvenArray.push('odd');
    }
  }
  return oddEvenArray;
}
