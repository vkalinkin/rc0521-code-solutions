/* exported take2nd */

function take2nd(queue) {
  let topValue;
  topValue = queue.peek();

  if (topValue === undefined) {
    return undefined;
  } else {
    topValue = queue.dequeue();
    const secondValue = queue.peek();
    if (secondValue === undefined) {
      return topValue;
    } else {
      queue.dequeue();
      queue.enqueue(topValue);
      return secondValue;
    }
  }

}
