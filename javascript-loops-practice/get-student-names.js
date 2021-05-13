/* exported getStudentNames */
function getStudentNames(students) {
  var studentsArray = [];
  for (var a = 0; a < students.length; a++) {
    var currentStudent = students[a];
    studentsArray.push(currentStudent.name);
  }
  return studentsArray;
}

// var students = [
//   bart = {
//     name: 'Bart Simpson',
//     age: 10
//   },
//   homer = {
//     name: 'Homer Simpson',
//     age: 39
//   }
// ];
