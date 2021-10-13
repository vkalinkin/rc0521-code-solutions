/* exported getTail */

function getTail(list) {
  let currentVal = list;
  let currentOutput = list.data;

  while (currentVal.next !== null) {
    currentVal = currentVal.next;
    currentOutput = currentVal.data;
  }
  return currentOutput;
}
