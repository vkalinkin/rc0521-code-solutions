var taskList = document.querySelector('.task-list');

function clickLog(event) {
  console.log('event.target:', event.target);
  console.log('tag name:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var eventTarget = event.target;
    var close = eventTarget.closest('.task-list-item');
    console.log('close:', close);
    close.remove();
  }
}

taskList.addEventListener('click', clickLog);
