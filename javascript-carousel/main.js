var imgTag = document.querySelector('img');

var $circleOne = document.querySelector('.circleOne');
var $circleTwo = document.querySelector('.circleTwo');
var $circleThree = document.querySelector('.circleThree');
var $circleFour = document.querySelector('.circleFour');
var $circleFive = document.querySelector('.circleFive');

var $carousel = document.querySelector('.carousel');
var $leftButton = document.querySelector('.leftArrow');
var $rightButton = document.querySelector('.rightArrow');

var stageCount = 1;

var imageInterval = setInterval(autoChange, 3000);

function autoChange(event) {
  stageCount++;
  checkCount();
  checkStage();
}

function checkStage() {
  if (stageCount === 1) {
    imgTag.className = 'img01';
    imgTag.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fas fa-circle cir circleOne';

    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleThree.className = 'far fa-circle cir circleThree';
    $circleFour.className = 'far fa-circle cir circleFour';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (stageCount === 2) {
    imgTag.className = 'img02';
    imgTag.setAttribute('src', 'images/004.png');
    $circleTwo.className = 'fas fa-circle cir circleTwo';

    $circleOne.className = 'far fa-circle cir circleOne';
    $circleThree.className = 'far fa-circle cir circleThree';
    $circleFour.className = 'far fa-circle cir circleFour';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (stageCount === 3) {
    imgTag.className = 'img03';
    imgTag.setAttribute('src', 'images/007.png');
    $circleThree.className = 'fas fa-circle cir circleThree';

    $circleOne.className = 'far fa-circle cir circleOne';
    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleFour.className = 'far fa-circle cir circleFour';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (stageCount === 4) {
    imgTag.className = 'img04';
    imgTag.setAttribute('src', 'images/025.png');
    $circleFour.className = 'fas fa-circle cir circleFour';

    $circleOne.className = 'far fa-circle cir circleOne';
    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleThree.className = 'far fa-circle cir circleThree';
    $circleFive.className = 'far fa-circle cir circleFive';

  } else if (stageCount === 5) {
    imgTag.className = 'img05';
    imgTag.setAttribute('src', 'images/039.png');
    $circleFive.className = 'fas fa-circle cir circleFive';

    $circleOne.className = 'far fa-circle cir circleOne';
    $circleTwo.className = 'far fa-circle cir circleTwo';
    $circleThree.className = 'far fa-circle cir circleThree';
    $circleFour.className = 'far fa-circle cir circleFour';

  }
}

function checkCount() {
  if (stageCount > 5) {
    stageCount = 1;
  }
}

function checkCountFloor() {
  if (stageCount <= 0) {
    stageCount = 5;
  }
}

$carousel.addEventListener('click', function (event) {
  if (event.target === $leftButton) {
    clearInterval(imageInterval);
    stageCount--;
    checkCountFloor();
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $rightButton) {
    clearInterval(imageInterval);
    stageCount++;
    checkCount();
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $circleOne) {
    clearInterval(imageInterval);
    stageCount = 1;
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $circleTwo) {
    clearInterval(imageInterval);
    stageCount = 2;
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $circleThree) {
    clearInterval(imageInterval);
    stageCount = 3;
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $circleFour) {
    clearInterval(imageInterval);
    stageCount = 4;
    checkStage();
    imageInterval = setInterval(autoChange, 3000);

  } else if (event.target === $circleFive) {
    clearInterval(imageInterval);
    stageCount = 5;
    checkStage();
    imageInterval = setInterval(autoChange, 3000);
  }
});
