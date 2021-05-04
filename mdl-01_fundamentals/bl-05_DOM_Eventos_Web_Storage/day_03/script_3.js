let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', changeBgcHoliday);

function changeBgcHoliday() {
  let elementWithClassHoliday = document.querySelectorAll('.holiday');
  let bgcActive = 'rgb(184, 235, 110)';
  let bgcReturn = 'rgb(238,238,238)';

  for (let index = 0; index < elementWithClassHoliday.length; index += 1) {
    if (elementWithClassHoliday[index].style.backgroundColor === bgcActive) {
      elementWithClassHoliday[index].style.backgroundColor = bgcReturn;
    } else {
      elementWithClassHoliday[index].style.backgroundColor = bgcActive;
    }
  }
}
