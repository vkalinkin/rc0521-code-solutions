/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// console.log('previousTodosJSON:', previousTodosJSON);

if (previousTodosJSON !== null) {
  // todos.push(JSON.parse(previousTodosJSON));
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);

});
