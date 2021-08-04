/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  const frontValue = queue.peek();

  if (frontValue === undefined) {
    return undefined;
  } else {
    for (let a = 0; a < index; a++) {
      const currentValue = queue.dequeue();
      queue.enqueue(currentValue);
    }
    const output = queue.dequeue();
    return output;
  }
}
