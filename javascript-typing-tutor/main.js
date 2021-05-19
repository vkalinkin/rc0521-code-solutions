var letterList = document.querySelectorAll('.letter');
// console.log(letterList);
// for (count; count < letterList.length){
//   var currentChar = letterList[count].textContent;
//   var oldName = letterList[count].className;
//   console.log(currentChar);
//   letterList[count].className += " under";
//   console.log(letterList[count].className);

//   if (cleanKey){
//     if (cleanKey !== currentChar){
//       letterList[count].className += " red"

//     } else if (cleanKey === currentChar){
//       letterList[count].className = oldName + " green";
//       count++;
//     }
//   }
// }

var count = 0;
var currentChar = letterList[count].textContent;
var oldName = letterList[count].className;
letterList[count].className += ' under';

function logKey(event) {
  var currentKey = `${event.code}`;
  var cleanKey = currentKey[3].toLowerCase();
  // console.log(cleanKey);
  // console.log('currentChar', currentChar);
  // console.log('count:', count)

  if (currentChar === ' ') {

    if (currentKey !== 'Space') {
      letterList[count].className += ' red';

    } else if (currentKey === 'Space') {
      letterList[count].className = oldName + ' green';
      count++;
      currentChar = letterList[count].textContent;
      oldName = letterList[count].className;
      letterList[count].className += ' under';

    }

  } else if (count === letterList.length - 1) {

    if (cleanKey !== currentChar) {
      letterList[count].className += ' red';

    } else if (cleanKey === currentChar) {
      letterList[count].className = oldName + ' green';
      // count++;
      // currentChar = letterList[count].textContent;
      // oldName = letterList[count].className;
      // letterList[count].className += " under";

    }

  } else {
    if (cleanKey !== currentChar) {
      letterList[count].className += ' red';

    } else if (cleanKey === currentChar) {
      letterList[count].className = oldName + ' green';
      count++;
      currentChar = letterList[count].textContent;
      oldName = letterList[count].className;
      letterList[count].className += ' under';

    }
  }
}

document.addEventListener('keydown', logKey);
