const pipe = document.querySelector('.ibaneis');
const player = document.querySelector('.player');
const entulho = document.querySelector('.entulho1');
let cont = 0;

const jump = () => {
  player.classList.add('jump');

  setTimeout(() => {
    player.classList.remove('jump');
  }, 700)
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
    } else if (cont <= 1026 && cont >= 329) {
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

const loop = setInterval(() => {

  // console.log('posição do player: ', window.getComputedStyle(player));
  // const pipePosition = pipe.offsetLeft;
  const playerLeftPosition = Number(window.getComputedStyle(player).left.replace('px', ''));
  const playerRigthPosition = Number(window.getComputedStyle(player).right.replace('px', ''));
  const entulhoRightPosition = Number(window.getComputedStyle(entulho).right.replace('px', ''));
  const entulhoBottomPosition = Number(window.getComputedStyle(entulho).bottom.replace('px', ''));
  const entulhoTopPosition = Number(window.getComputedStyle(entulho).top.replace('px', ''));
  const playerTopPosition = Number(window.getComputedStyle(player).top.replace('px', ''));
  const playerBottomPosition = Number(window.getComputedStyle(player).bottom.replace('px', ''));

  // console.log('BOTTOM', playerTopPosition, entulhoTopPosition);
  // console.log('playerHeigth', playerBottomPosition, playerTopPosition);

  let somaEnt = playerRigthPosition - 205;
  let posEnt = entulhoRightPosition + 205;
  console.log('Position', entulhoRightPosition, somaEnt);

  // console.log('somaEnt', somaEnt);
  if (entulhoRightPosition >= somaEnt) {
    console.log('!!!!!!!!ENTULHO!!!!!!!!');
    document.querySelector('.player').style.right = `${posEnt}px`
    document.querySelector('.entulho1').style.right = `${entulhoRightPosition}px`
    document.querySelector('.entulho1').style.animation = "none";
    // document.querySelector('.entulho1').style.right = `${entulhoRightPosition}px`
    // document.querySelector('.entulho1').style.animation = '';
  }


}, 10)



document.addEventListener('keydown', right);