/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const old = list.next;
  list.next = new LinkedList(value);
  if (old != null) {
    list.next.next = old;
  }
}
