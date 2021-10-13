/* exported getLength */

function getLength(list) {
  let count = 0;
  let currentVal = list;
  while (currentVal !== null) {
    currentVal = currentVal.next;
    count++;
  }
  return count;

}
