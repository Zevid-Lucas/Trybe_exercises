let getColorInput = document.querySelector('#font-color');
let getBgcInput = document.querySelector('#bgc-color');

//EventListener color
getColorInput.addEventListener('input', function (event) {
  let fontColor = event.target.value;
  document.querySelector('body').style.color = fontColor;

  localStorage.setItem('color', fontColor);
});

//EventListener backgroundColor
getBgcInput.addEventListener('input', function (event) {
  let bgcColor = event.target.value;
  document.querySelector('body').style.backgroundColor = bgcColor;
  localStorage.setItem('backgroundColor', bgcColor);
});

// Resgata as definições selecionadas
function formatSelected() {
  let colorSelected = localStorage.getItem('color');
  document.querySelector('body').style.color = colorSelected;

  let bgcSelected = localStorage.getItem('backgroundColor');
  document.querySelector('body').style.backgroundColor = bgcSelected;
}
formatSelected();
