const body = document.querySelector('body');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const active = document.querySelector('.active');
const slider_container = document.querySelector('.slider-container');
const slide_divs = document.querySelectorAll('.slide');

let counter = 0;

right.addEventListener('click', () => {
  counter++;
  if (counter >= slide_divs.length) {
    counter = 0;
    changeImage();
  } else {
    changeImage();
  }
});
left.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = 4;
    changeImage();
  } else {
    changeImage();
  }
});

function changeImage() {
  slide_divs.forEach((slide_div) => {
    slide_div.classList.remove('active');
    slide_divs[counter].classList.add('active');
    body.style.backgroundImage = slide_divs[counter].style.backgroundImage;
  });
}
