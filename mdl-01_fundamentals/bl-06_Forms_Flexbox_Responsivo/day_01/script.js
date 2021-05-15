function createStateOptions() {
  let states = document.querySelector('#input-state');
  let stateOptions = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
  ];
  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

createStateOptions();

function createButton(type, addClass, content) {
  const createBtn = document.createElement('button');
  createBtn.setAttribute('type', type);
  createBtn.className = addClass;
  createBtn.innerHTML = content;
  document.querySelector('.section-btn').appendChild(createBtn);
}
createButton('submit', 'btn-submit', 'Submit');
createButton('reset', 'btn-reset', 'Reset');

function stopValidate(e) {
  e.preventDefault();
}

let arrayInput = [
  'name',
  'email',
  'cpf',
  'address',
  'city',
  'resume',
  'office',
  'resume-office',
  'start-date',
  '',
];

let error = false;

function checkRequired() {
  document.querySelector('.container-error').innerText = '';

  for (let index = 0; index < arrayInput.length - 1; index += 1) {
    const inputsType = document.querySelector(`[name=${arrayInput[index]}`);
    const elementLabel = inputsType.previousElementSibling.innerText.slice(0, -1);

    if (inputsType.value === '') {
      let elementLi = document.createElement('li');
      elementLi.innerHTML = `O campo ${elementLabel} é obrigatório`;
      elementLi.classList.add('error-info');

      document.querySelector('.container-error').appendChild(elementLi);
      window.scrollTo(0, 0);
      error = true;
    }
  }
  return error;
}

function checkFormat() {
  for (let index = 0; index < arrayInput.length - 1; index += 1) {
    const inputsType = document.querySelector(`[name=${arrayInput[index]}]`);
    const elementLabel = inputsType.previousElementSibling.innerText.slice(0, -1);

    if (inputsType.name === 'email') {
      const emailVerification = /.+@.+/g;
      if (!emailVerification.test(inputsType.value)) {
        let elementLi = document.createElement('li');
        elementLi.innerHTML = `O campo ${elementLabel} é inválido`;
        elementLi.classList.add('error-info');
        document.querySelector('.container-error').appendChild(elementLi);
        window.scrollTo(0, 0);
        error = true;
      }
    }

    if (inputsType.name === 'cpf') {
      const cpfValidation = /\d{11}/g;
      if (!cpfValidation.test(inputsType.value)) {
        let elementLi = document.createElement('li');
        elementLi.classList.add('error-info');
        elementLi.innerHTML = `O campo ${elementLabel} é inválido`;
        document.querySelector('.container-error').appendChild(elementLi);
        window.scrollTo(0, 0);
        error = true;
      }
    }

    if (inputsType.name === 'start-date') {
      const dateValidation =
        /([0-2][1-9]|[3][01])\/([0][1-9]|[1][12])\/([0-1][0-9][0-9][0-9]|[2][0][0-1][0-9]|[2][0][2][01])/g;
      if (!dateValidation.test(inputsType.value)) {
        let elementLi = document.createElement('li');
        elementLi.innerHTML = `O campo ${elementLabel} é inválido. Formato dd/mm/aaaa.`;
        elementLi.classList.add('error-info');
        document.querySelector('.container-error').appendChild(elementLi);
        window.scrollTo(0, 0);
        error = true;
      }
    }
  }
  return error;
}

function submitForm(msg) {
  document.querySelector('.container-validation').innerHTML = '';
  for (let index = 0; index < arrayInput.length - 1; index += 1) {
    const inputsType = document.querySelector(`[name=${arrayInput[index]}]`);
    const elementLabel = inputsType.previousElementSibling.innerText.slice(0, -1);
    if (!msg) {
      let elementP = document.createElement('p');
      elementP.innerHTML = `${elementLabel}: ${inputsType.value} `;
      elementP.className = 'itens-sucess';
      document.querySelector('.container-validation').appendChild(elementP);
    }
  }
}

function clearForm() {
  for (let index = 0; index < arrayInput.length - 1; index += 1) {
    const inputsType = document.querySelector(`[name=${arrayInput[index]}]`);
    if (!error) {
      inputsType.value = '';
    }
  }
  error = false;
}
