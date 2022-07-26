const pipe = document.querySelector('.pipe');
const player = document.querySelector('.player');

const jump = () => {
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  // const playerPosition = window.getComputedStyled(player).bottom.replace('px', '');
  // console.log('play posit', playerPosition)

  if (pipePosition <= 205) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`
  }
}, 10)
document.addEventListener('keydown', jump);