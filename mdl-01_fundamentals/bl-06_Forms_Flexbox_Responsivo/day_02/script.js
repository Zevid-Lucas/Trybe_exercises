function createStateOptions() {
  const states = document.getElementById('state');
  const stateOptions = [
    'Selecione seu estado',
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
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
createStateOptions();

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(day, month, year);
  },
});

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 5,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
    },
    city: {
      required: true,
    },
    resume: {
      required: true,
    },
    office: {
      required: true,
    },
    resumeOffice: {
      required: true,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'Campo obrigatório',
      minLength: 'Limite minimo não alcançado',
    },
    email: {
      required: 'Campo obrigatório',
      email: 'E-mail é inválido',
    },
    cpf: {
      required: 'Campo obrigatório',
      maxLength: 'Máximo 11 caracteres',
    },
    address: {
      required: 'Campo obrigatório',
    },
    city: {
      required: 'Campo obrigatório',
    },
    resume: {
      required: 'Campo obrigatório',
    },
    office: {
      required: 'Campo obrigatório',
    },
    resumeOffice: {
      required: 'Campo obrigatório',
    },
    date: {
      required: 'Campo obrigatório',
    },
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});
