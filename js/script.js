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
  const playerPosition = Number(window.getComputedStyle(player).bottom.replace('px', ''));

  if (pipePosition <= 115 && pipePosition > 0 && playerPosition <= 105) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    player.style.animation = 'none';
    player.style.bottom = `${playerPosition}px`

    // Adicionar imagem de game over

    clearInterval(loop);
  }
}, 10)
document.addEventListener('keydown', jump);