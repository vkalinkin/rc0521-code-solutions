var student = {
  firstName: 'Victor',
  lastName: 'Kalinkin',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'QA Tester';

console.log('Student lives in Irvine?', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

console.log('Full Student Info:', student);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: '1968'
};

vehicle['color'] = 'Higland Green';
vehicle['isConvertable'] = false;

console.log('Vehicle color', vehicle['color']);
console.log('Is convertible?', vehicle['isConvertable']);
console.log('Complete Vehicle Info:', vehicle);

var pet = {
  name: 'Scooby-Doo',
  type: 'Great Dane'
};

delete pet.name;
delete pet.type;
console.log('Pet Info:', pet);
