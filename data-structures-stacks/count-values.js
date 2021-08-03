/* exported countValues */

function countValues(stack) {
  let count = 0;
  let topValue;
  topValue = stack.peek();
  if (topValue === undefined) {
    return count;
  } else {
    while (topValue !== undefined) {
      stack.pop();
      topValue = stack.peek();
      count++;
    }
    return count;
  }
}
