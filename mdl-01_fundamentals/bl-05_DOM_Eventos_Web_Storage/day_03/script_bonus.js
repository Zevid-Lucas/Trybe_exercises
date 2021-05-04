function addCommitment() {
  let boxText = document.querySelector('#task-input');
  let divTask = document.querySelector('.task-list');
  let btnAdd = document.querySelector('#btn-add');

  btnAdd.addEventListener('click', function () {
    if (boxText.value.length > 0) {
      let createLi = document.createElement('li');
      createLi.innerText = boxText.value;
      divTask.appendChild(createLi);
      boxText.value = '';
    } else {
      alert('Erro! Digite algum caractere');
    }
  });

  boxText.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && boxText.value.length > 0) {
      let createLi = document.createElement('li');
      createLi.innerText = boxText.value;
      divTask.appendChild(createLi);
      boxText.value = '';
    } else if (event.keyCode === 13 && boxText.value.length === 0) {
      alert('Erroe! Digite um caractere');
    }
  });
}

addCommitment();
