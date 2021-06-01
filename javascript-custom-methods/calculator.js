/* exported calculator */

var calculator = {
  add: function (x, y) {
    return (x + y);
  },
  subtract: function (x, y) {
    return (x - y);
  },
  multiply: function (x, y) {
    return (x * y);
  },
  divide: function (x, y) {
    return (x / y);
  },
  square: function (x) {
    return (x * x);
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var a = 0; a < numbers.length; a++) {
      sum += numbers[a];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var average = 0;
    var sum = 0;
    var length = numbers.length;
    for (var a = 0; a < numbers.length; a++) {
      sum += numbers[a];
    }
    average = sum / length;
    return average;
  }
};
