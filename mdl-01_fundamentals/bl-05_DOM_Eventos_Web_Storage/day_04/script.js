let getColorInput = document.querySelector('#font-color');
let getBgcInput = document.querySelector('#bgc-color');
let getFontSizeInput = document.querySelector('#font-size');
let getLineHeightInput = document.querySelector('#line-height');
let getElementP = document.querySelectorAll('p');

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

//EventListener fontSize
getFontSizeInput.addEventListener('input', function (event) {
  let valueFontSize = event.target.value;

  for (let index = 0; index < getElementP.length; index += 1) {
    if (valueFontSize < 10) valueFontSize = '10';
    if (valueFontSize > 42) valueFontSize = '42';
    getElementP[index].style.fontSize = valueFontSize + 'px';
  }
  let sizeFont = valueFontSize + 'px';
  localStorage.setItem('fontSize', sizeFont);
});

//EventListener lineHeight
getLineHeightInput.addEventListener('input', function (event) {
  let lineHeightSelected = event.target.value;

  for (let index = 0; index < getElementP.length; index += 1) {
    if (lineHeightSelected < 10) lineHeightSelected = '10';
    if (lineHeightSelected > 42) lineHeightSelected = '42';
    getElementP[index].style.lineHeight = lineHeightSelected + 'px';
  }
  localStorage.setItem('lineHeight', lineHeightSelected);
});

// Resgata as definições selecionadas
function formatSelected() {
  let colorSelected = localStorage.getItem('color');
  document.querySelector('body').style.color = colorSelected;

  let bgcSelected = localStorage.getItem('backgroundColor');
  document.querySelector('body').style.backgroundColor = bgcSelected;

  let fontSizeSelected = localStorage.getItem('fontSize');
  for (let index = 0; index < getElementP.length; index += 1) {
    getElementP[index].style.fontSize = fontSizeSelected;
  }

  let lineHeightSelected = localStorage.getItem('lineHeight');
  for (let index = 0; index < getElementP.length; index += 1) {
    getElementP[index].style.lineHeight = lineHeightSelected + 'px';
  }
}
formatSelected();
