function createBtnHoliday() {
  let createBtn = document.createElement('button');
  createBtn.innerHTML = 'Feriados';
  createBtn.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(createBtn);
}

createBtnHoliday();
