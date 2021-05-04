function receiveDaysOfFriday(arrayDaysOfFriday) {
  let btnFriday = document.querySelector('#btn-friday');

  btnFriday.addEventListener('click', function () {
    let daysOfFriday = document.querySelectorAll('.friday');
    let textFriday = 'Sextoooou bb';

    for (let index = 0; index < daysOfFriday.length; index += 1) {
      if (daysOfFriday[index].innerHTML !== textFriday) {
        daysOfFriday[index].innerHTML = textFriday;
      } else {
        daysOfFriday[index].innerHTML = arrayDaysOfFriday[index];
      }
    }
  });
}
let numberDays = [4, 11, 18, 25];
receiveDaysOfFriday(numberDays);
