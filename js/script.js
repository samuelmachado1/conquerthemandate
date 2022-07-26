const player = document.querySelector('.player');

const jump = () => {
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
  }, 500)
}
document.addEventListener('keydown', jump);