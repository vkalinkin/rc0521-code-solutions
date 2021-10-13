/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const old = list.next.next;

    list.next = old;
    return list;
  } else {
    return list;
  }

}
