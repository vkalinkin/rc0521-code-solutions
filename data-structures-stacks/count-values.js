/* exported countValues */

function countValues(stack) {
  let count = 0;
  let topValue;
  topValue = stack.pop();
  // if (topValue === undefined) {
  //   return count;
  // } else {
  //   while (topValue !== undefined) {
  //     stack.pop();
  //     topValue = stack.peek();
  //     count++;
  //   }
  //   return count;
  // }
  while (topValue !== undefined) {
    // stack.pop();
    // topValue = stack.peek();
    topValue = stack.pop();
    count++;
  }
  return count;
}
