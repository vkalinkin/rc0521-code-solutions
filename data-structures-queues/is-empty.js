/* exported isEmpty */

function isEmpty(queue) {
  const frontVal = queue.peek();
  if (frontVal === undefined) {
    return true;
  } else {
    return false;
  }
}
