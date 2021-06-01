/* exported Student */
function Student(fName, lName, subject) {
  this.firstName = fName;
  this.lastName = lName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction = function () {
  var intro = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  return intro;
};
