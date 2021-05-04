function createBtnFriday(buttonName) {
  let createBtnFriday = document.createElement('button');
  createBtnFriday.id = 'btn-friday';
  createBtnFriday.innerHTML = buttonName;
  document.querySelector('.buttons-container').appendChild(createBtnFriday);
}

createBtnFriday('Sexta-Feira');
