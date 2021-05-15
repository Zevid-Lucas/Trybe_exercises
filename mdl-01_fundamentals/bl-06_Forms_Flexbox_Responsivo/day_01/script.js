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
