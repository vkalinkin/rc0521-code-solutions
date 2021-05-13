/* exported countdown */
function countdown(number) {
  var countdownArray = [];
  for (var a = number; a > 0; a--) {
    countdownArray.push(a);
  }
  countdownArray.push(0);
  return countdownArray;
}
