/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topValue = stack.peek();
  if (topValue !== undefined) {
    const firstValue = stack.pop();
    stack.push(value);
    stack.push(firstValue);
  }
}
