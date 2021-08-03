/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topValue = stack.peek();
  if (topValue === undefined) {
    return undefined;
  } else {
    const firstValue = stack.pop();
    const secondValue = stack.peek();
    if (secondValue === undefined) {
      stack.push(firstValue);
      return undefined;
    } else {
      stack.push(firstValue);
      return secondValue;
    }
  }
}
