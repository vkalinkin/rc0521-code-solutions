/* exported includes */

function includes(list, value) {
  let hasValue = false;
  let currentVal = list;
  while (currentVal !== null) {

    if (currentVal.data === value) {
      hasValue = true;
    }
    currentVal = currentVal.next;
  }
  return hasValue;
}
