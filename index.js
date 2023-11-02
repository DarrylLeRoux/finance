const close = document.getElementById('close');
const modal_container = document.getElementById('modal_container');
const main = document.querySelector('.main');
const choice = document.querySelector('.choice');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
  main.style.display = 'block';
  choice.style.display = 'flex';
});

function playSound() {
  let sound = document.getElementById('audio');
  sound.play();
}

document.addEventListener('DOMContentLoaded', (event) => {
  modal_container.classList.add('show');
  main.style.display = 'none';
  choice.style.display = 'none';
  console.log('DOM fully loaded and parsed');
});

document
  .querySelector('confetti-botton')
  .addEventListener('click', () => confetti());
