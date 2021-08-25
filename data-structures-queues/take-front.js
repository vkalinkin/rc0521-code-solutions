/* exported takeFront */

function takeFront(queue) {
  const frontVal = queue.dequeue();
  if (frontVal === undefined) {
    return undefined;
  } else {
    return frontVal;
  }
}
