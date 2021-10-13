/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const outputList = new LinkedList(value);
  outputList.next = list;

  return outputList;
}
