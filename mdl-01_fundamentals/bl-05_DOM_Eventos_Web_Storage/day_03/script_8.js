function createLegendTask(colorLegend) {
  let createDiv = document.createElement('div');
  createDiv.classList.add('task');
  createDiv.style.backgroundColor = colorLegend;
  document.querySelector('.my-tasks').appendChild(createDiv);
}

createLegendTask('tomato');
