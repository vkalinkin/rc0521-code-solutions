/* exported Bank */
function Bank() {
  var nextNumber = 1;
  this.nextAccountNumber = nextNumber;
  var bankAccounts = [];
  this.accounts = bankAccounts;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var openedAccount = new Account(this.nextAccountNumber, holder);
    openedAccount.deposit(balance);
    this.accounts.push(openedAccount);
    this.nextAccountNumber++;
    return openedAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var accountMatch = false;
  var returnACcount = {};
  for (var a = 0; a < this.accounts.length; a++) {
    var currentAccount = this.accounts[a];
    if (currentAccount.number === number) {
      returnACcount = currentAccount;
      accountMatch = true;
      break;
    }
  }

  if (accountMatch === true) {
    return returnACcount;
  } else {
    return null;
  }
};

Bank.prototype.getTotalAssets = function () {
  var bankTotal = 0;
  for (var a = 0; a < this.accounts.length; a++) {
    var currentAccount = this.accounts[a];
    bankTotal += currentAccount.getBalance();
  }

  return bankTotal;
};
