function setColorSelected() {
  let addColorInDay = document.querySelector('#days');
  let selected = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');
  let colorSelected = task.style.backgroundColor;

  addColorInDay.addEventListener('click', function (event) {
    if (event.target.style.color === colorSelected && selected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    } else if (event.target.style.color !== colorSelected && selected.length > 0) {
      event.target.style.color = colorSelected;
    }
  });
}

setColorSelected();
