/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let topValue;
  topValue = queue.peek();

  if (topValue === undefined) {
    return undefined;
  } else {
    topValue = queue.dequeue();
    let secondValue = queue.peek();
    if (secondValue === undefined) {
      return topValue;
    } else {

      if (topValue < secondValue) {
        return topValue;
      } else {
        queue.enqueue(topValue);
        while (topValue > secondValue) {
          queue.enqueue(topValue);
          topValue = queue.dequeue();
          secondValue = queue.peek();

          if (topValue < secondValue) {
            queue.dequeue();
          }

        }

        return topValue;
      }

    }
  }
}
