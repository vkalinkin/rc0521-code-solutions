/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let currentVal = list;

  while (currentVal.next !== null) {
    currentVal = currentVal.next;

  }
  currentVal.next = new LinkedList(value);
  return list;
}
