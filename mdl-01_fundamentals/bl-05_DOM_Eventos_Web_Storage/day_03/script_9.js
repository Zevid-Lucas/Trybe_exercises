function addClassSelected() {
  let divMyTasks = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');
  myTask.addEventListener('click', function (event) {
    if (divMyTasks.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

addClassSelected();
