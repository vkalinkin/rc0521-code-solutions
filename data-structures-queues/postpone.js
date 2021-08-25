/* exported postpone */

function postpone(queue) {
  const frontVal = queue.peek();
  if (frontVal !== undefined) {
    queue.dequeue();
    queue.enqueue(frontVal);
  }
}
