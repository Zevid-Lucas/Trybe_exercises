function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDayOfTheMonth() {
  let monthDays = [];
  let daysWeek = document.querySelector('#days');
  for (let index = 1; index <= 31; index += 1) {
    monthDays.push(index);
  }
  monthDays.unshift(29, 30);

  for (let index = 0; index < monthDays.length; index += 1) {
    let elementLi = document.createElement('li');
    let daysOfMonth = monthDays[index];
    elementLi.classList.add('day');
    elementLi.innerHTML = daysOfMonth;
    daysWeek.appendChild(elementLi);

    if (daysOfMonth === 24 || daysOfMonth === 31) {
      elementLi.classList.add('holiday');
    } else if (daysOfMonth === 4 || daysOfMonth === 11 || daysOfMonth === 18) {
      elementLi.classList.add('friday');
    } else if (daysOfMonth === 25) {
      elementLi.classList.add('holiday', 'friday');
    }
  }
}
createDayOfTheMonth();
