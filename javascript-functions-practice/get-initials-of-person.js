/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var full = (person.firstName).charAt(0) + (person.lastName).charAt(0);
  return full;
}
