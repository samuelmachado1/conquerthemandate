const pipe = document.querySelector('.pipe');
const player = document.querySelector('.player');
let cont = 0;

const jump = () => {
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
  }, 500)
}

const right = () => {
  var tecla = event.keyCode;

  if (tecla == 13) {

    console.log('enter');

  } else if (tecla == 27) {

    console.log('esc');

  } else if (tecla == 37) {
    if (cont < 1026 && cont !== 0) {
      cont += 25;
      document.querySelector('.player').style.right = `${cont}px`
    }

  } else if (tecla == 38) {

    jump();

  } else if (tecla == 39) {
    if (cont == 0) {
      cont = 1026;
      document.querySelector('.player').style.right = '1026px';
    } else if (cont <= 1026) {
      cont -= 28;
      document.querySelector('.player').style.right = `${cont}px`
    }
  } else if (tecla == 40) {

    console.log('down');

  }

  setTimeout(() => {
    player.classList.remove('right');
  }, 500)
}

// const loop = setInterval(() => {
//   const pipePosition = pipe.offsetLeft;
//   const playerPosition = Number(window.getComputedStyle(player).bottom.replace('px', ''));

//   // if (pipePosition <= 115 && pipePosition > 0 && playerPosition <= 105) {
//   //   pipe.style.animation = 'none';
//   //   pipe.style.left = `${pipePosition}px`

//   //   player.style.animation = 'none';
//   //   player.style.bottom = `${playerPosition}px`

//   //   // Adicionar imagem de game over

//   //   clearInterval(loop);
//   // }
// }, 10)



document.addEventListener('keydown', right);