/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  var currentTransactions = [];
  this.transactions = currentTransactions;
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var currentDeposit = new Transaction('deposit', amount);
    this.transactions.push(currentDeposit);
    return true;
  } else {
    return false;
  }

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var currentWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(currentWithdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var allDeposits = 0;
  var allWithdrawals = 0;
  var balance = 0;
  var queue = this.transactions;
  for (var a = 0; a < queue.length; a++) {
    var curTransaction = queue[a];
    if (curTransaction.type === 'deposit') {
      allDeposits += curTransaction.amount;
    } else {
      allWithdrawals += curTransaction.amount;
    }
  }

  balance = allDeposits - allWithdrawals;
  return balance;
};
