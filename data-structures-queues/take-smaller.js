/* exported takeSmaller */

function takeSmaller(queue) {
  let topValue;
  topValue = queue.peek();

  if (topValue === undefined) {
    return undefined;
  } else {
    topValue = queue.dequeue();
    const secondValue = queue.peek();
    if (secondValue === undefined) {
      queue.dequeue();
      return topValue;
    } else {
      if (topValue < secondValue) {
        queue.dequeue();
        queue.enqueue(secondValue);
        return topValue;
      } else if (topValue === secondValue) {
        queue.dequeue();
        queue.enqueue(topValue);
        return topValue;
      } else {
        queue.dequeue();
        queue.enqueue(topValue);
        return secondValue;
      }
    }
  }
}
