function myTasks(myTask) {
  let newTasks = document.createElement('span');
  newTasks.innerHTML = myTask;
  document.querySelector('.my-tasks').appendChild(newTasks);
}

myTasks('Projeto');
