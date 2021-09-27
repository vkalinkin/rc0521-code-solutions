function graduate(credential) {
  return function (fullName) {
    return fullName + ' ' + credential;
  };
}

const medicalSchool = graduate('M. D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Victor Kalinkin'));
console.log(lawSchool('Saul Goodman'));
