let getColorInput = document.querySelector('#font-color');

getColorInput.addEventListener('input', function (event) {
  let fontColor = event.target.value;
  document.querySelector('body').style.color = fontColor;

  localStorage.setItem('color', fontColor);
});

function formatSelected() {
  let colorSelected = localStorage.getItem('color');
  document.querySelector('body').style.color = colorSelected;
}
formatSelected();
