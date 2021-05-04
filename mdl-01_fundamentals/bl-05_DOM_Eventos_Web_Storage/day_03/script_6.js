function daysMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function daysMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

daysMouseOver();
daysMouseOut();
