let count = 3;

const rocket = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(rocket);
    console.log('Blast off!');
  }
}, 1000);
