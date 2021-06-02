var h1Tag = document.querySelector('h1');

function changeH1(event) {
  h1Tag.textContent = 'Hello There';
}

setTimeout(changeH1, 2000);
