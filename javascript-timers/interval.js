var h1Tag = document.querySelector('h1');

function changeH1(event) {
  if (h1Tag.textContent === '4') {
    h1Tag.textContent = '3';
  } else if (h1Tag.textContent === '3') {
    h1Tag.textContent = '2';
  } else if (h1Tag.textContent === '2') {
    h1Tag.textContent = '1';
  } else if (h1Tag.textContent === '1') {
    h1Tag.textContent = 'Let it Rip!';
  } else if (h1Tag.textContent === 'Let it Rip!') {
    clearInterval();
  }
}

setInterval(changeH1, 1000);
