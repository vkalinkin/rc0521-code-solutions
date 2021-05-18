// console.log('hey');
// var bulbIsOn = false;
var bulbButton = document.querySelector('.circle-bulb');
var cont = document.querySelector('.container');

function changeColor(event) {
  if (bulbButton.className === 'circle-bulb on') {
    bulbButton.className = 'circle-bulb off';
    cont.className = 'container back-black';
  } else {
    bulbButton.className = 'circle-bulb on';
    cont.className = 'container back-white';
  }

  // if (bulbIsOn = false){
  //   bulbIsOn = true;
  //   bulbButton.className = 'circle-bulb on';
  // } else {
  //   bulbIsOn = false;
  //   bulbButton.className = 'circle-bulb off';
  // }
}

bulbButton.addEventListener('click', changeColor, false);
