var clickNumber = 0;
// console.log('clickNumber count', clickNumber);

var buttonHot = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function increaseNumber(event) {
  clickNumber++;
  // console.log('clickNumber count', clickNumber);
  // var x = document.querySelector('click-count').textContent;
  clickCount.textContent = 'Clicks: ' + clickNumber;

  if (clickNumber >= 0 && clickNumber < 4) {
    buttonHot.className = 'hot-button cold';
  } else if (clickNumber >= 4 && clickNumber < 7) {
    buttonHot.className = 'hot-button cool';
  } else if (clickNumber >= 7 && clickNumber < 10) {
    buttonHot.className = 'hot-button tepid';
  } else if (clickNumber >= 10 && clickNumber < 13) {
    buttonHot.className = 'hot-button warm';
  } else if (clickNumber >= 13 && clickNumber < 16) {
    buttonHot.className = 'hot-button hot';
  } else {
    buttonHot.className = 'hot-button nuclear';
  }
}

buttonHot.addEventListener('click', increaseNumber, false);

// var countText = document.querySelectorAll('click-count').textContent;
// countText = clickNumber;

// clickCount.textContent = countText;

// console.log('countText', countText);
