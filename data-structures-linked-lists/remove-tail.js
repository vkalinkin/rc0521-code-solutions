/* exported removeTail */

function removeTail(list) {
  if (list.next !== null) {
    let currentVal = list;
    while (currentVal.next.next !== null) {
      currentVal = currentVal.next.next;
    }
    currentVal.next = null;
  }
  return list;
}
