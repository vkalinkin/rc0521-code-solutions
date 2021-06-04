var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var a = 0; a < xhr.response.length; a++) {
    var listName = document.createElement('li');
    listName.textContent = xhr.response[a].name;
    $userList.appendChild(listName);
  }
});
xhr.send();
