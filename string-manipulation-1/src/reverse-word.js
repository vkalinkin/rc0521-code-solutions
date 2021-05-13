/* exported reverseWord */
function reverseWord(word) {
  var reversed = '';
  var last = word.length;
  for (last; last >= 0; last--) {
    reversed += word.charAt(last);
  }
  return reversed;
}
