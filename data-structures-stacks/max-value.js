/* exported maxValue */

function maxValue(stack) {
  let maxValue;
  let topValue;
  topValue = stack.peek();
  if (topValue === undefined) {
    return -Infinity;
  } else {
    while (topValue !== undefined) {
      const currentValue = stack.pop();
      if (maxValue === undefined) {
        maxValue = currentValue;
      } else if (currentValue > maxValue) {
        maxValue = currentValue;
      }
      topValue = stack.peek();
    }
    return maxValue;
  }
}
