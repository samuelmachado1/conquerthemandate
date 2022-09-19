// Player
const max = document.querySelector(".max");

// Dynamic screen items
const score = document.querySelector(".score");
const scoreCoins = document.querySelector(".scoreCoins");
const moedas = document.querySelector(".moedas");
const moedas2 = document.querySelector(".moedas2");
const moedas3 = document.querySelector(".moedas3");
const moedas4 = document.querySelector(".moedas4");
const moedas5 = document.querySelector(".moedas5");

// Bonus
const moneyBonus = document.querySelector(".moneyBonus");
const facil = document.querySelector(".facil");
const coinBonus = document.querySelector(".coinBonus");
const coinBonus11 = document.querySelector(".coinBonus11");
const coinBonus12 = document.querySelector(".coinBonus12");
const coinBonus13 = document.querySelector(".coinBonus13");
const pastel = document.querySelector(".pastel");
const combo = document.querySelector(".combo");
const combo2 = document.querySelector(".combo2");
const combo3 = document.querySelector(".combo3");



// Enemies
const cacto = document.querySelector(".cacto"); //iganez
const catraca = document.querySelector(".catraca");
const worksBoard = document.querySelector(".worksBoard");
const enemyEntulho = document.querySelector(".enemyEntulho");
const board = document.querySelector(".board");
const poEnemy = document.querySelector(".poEnemy");
const catracaTagua = document.querySelector(".catracaTagua");
const enemyEntulhoTagua = document.querySelector(".enemyEntulhoTagua");
const worksBoardTagua = document.querySelector(".worksBoardTagua");
const catracaTagua2 = document.querySelector(".catracaTagua2");
const enemyEntulhoTagua2 = document.querySelector(".enemyEntulhoTagua2");
const worksBoardTagua2 = document.querySelector(".worksBoardTagua2");
const boardTagua = document.querySelector(".boardTagua");
const boardTagua2 = document.querySelector(".boardTagua2");
const cactoRecanto = document.querySelector(".cacto"); //iganez
const catracaRecanto = document.querySelector(".catracaRecanto");
const enemyEntulhoRecanto = document.querySelector(".enemyEntulhoRecanto");
const worksBoardRecanto = document.querySelector(".worksBoardRecanto");
const catracaRecanto2 = document.querySelector(".catracaRecanto2");
const enemyEntulhoRecanto2 = document.querySelector(".enemyEntulhoRecanto2");
const worksBoardRecanto2 = document.querySelector(".worksBoardRecanto2");
const boardRecanto = document.querySelector(".boardRecanto");
const boardRecanto2 = document.querySelector(".boardRecanto2");
const catracaSaoSebas = document.querySelector(".catracaSaoSebas");
const enemyEntulhoSaoSebas = document.querySelector(".enemyEntulhoSaoSebas");
const worksBoardSaoSebas = document.querySelector(".worksBoardSaoSebas");
const catracaSaoSebas2 = document.querySelector(".catracaSaoSebas2");
const enemyEntulhoSaoSebas2 = document.querySelector(".enemyEntulhoSaoSebas2");
const worksBoardSaoSebas2 = document.querySelector(".worksBoardSaoSebas2");
const boardSaoSebas = document.querySelector(".boardSaoSebas");
const boardSaoSebas2 = document.querySelector(".boardSaoSebas2");



//audios
const coin = new Audio("./fx/coin.wav");
const trilha = new Audio("./fx/trilha1.ogg");
const damage = new Audio("./fx/damage.wav");
const foodBonus = new Audio("./fx/foodBonus.wav");


// Helpers - Coin counter helpers.It was necessary to use the helpers due to the validation of the positioning of the object on the screen.Since the way it was implemented executes the if more than once
let checkCacto = false;
let checkWork = false;
let checkTrash = false;
let checkBoard = false;
let checkPoEnemy = false;

let checkCatraca = false;
let checkCatracaTagua = false;
let checkCatracaTagua2 = false;
let checkCatracaRecanto = false;
let checkCatracaRecanto2 = false;
let checkCatracaSaoSebas = false;
let checkCatracaSaoSebas2 = false;



let checkCactoTagua = false;
let checkWorkTagua = false;
let checkTrashTagua = false;
let checkBoardTagua = false;

let checkWorkTagua2 = false;
let checkTrashTagua2 = false;
let checkBoardTagua2 = false;

let checkCactoRecanto = false;
let checkWorkRecanto = false;
let checkTrashRecanto = false;
let checkBoardRecanto = false;

let checkCactoSaoSebas = false;
let checkWorkSaoSebas = false;
let checkTrashSaoSebas = false;
let checkBoardSaoSebas = false;

// Helper for jump
let alreadyJump = false;


// Counters
let scoreBoardCoins = 4;
let miniCoins = 0;


let check = "";
let count = 0;
let placar = 0;
let i = 0;


// Jump rules

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!max.classList.contains("jump")) {
    max.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      max.classList.remove("jump");
      alreadyJump = false;
    }, 700);
  }
}

setInterval(() => {
  placar += 13;
}, 100);

// Game loop
setInterval(() => {
  //Volume fx
  damage.volume = 0.3;


  //Game fx
  trilha.volume = 0.25;
  trilha.play();

  if (scoreBoardCoins <= 1) {
    trilha.playbackRate = 1.3;
  }
  if (scoreBoardCoins <= 0) {
    trilha.pause();
    alert(`Ahhh... Que pena, você perdeu.\nTente ajudar o MAX MACIEL 50100 Novamente!!\nSua pontuação foi de ${placar} pontos`);
    count = 0;
  }

  // Coin bonus rules

  // if (miniCoins >= 2 && scoreBoardCoins < 3) {
  //   scoreBoardCoins += 1;
  // }

  if (scoreBoardCoins >= 3) {
    moedas.style.backgroundImage = "30px";
    moedas2.style.backgroundImage = "80px";
    moedas3.style.backgroundImage = "130px";
  }
  if (scoreBoardCoins <= 2) {
    moedas.style.backgroundImage = "30px";
    moedas2.style.backgroundImage = "80px";
    moedas3.style.backgroundImage = "none";
  }
  if (scoreBoardCoins == 1) {
    moedas.style.backgroundImage = "30px";
    moedas2.style.backgroundImage = "none";
    moedas3.style.backgroundImage = "none";
  }
  if (scoreBoardCoins == 0) {
    moedas.style.backgroundImage = "none";
    moedas2.style.backgroundImage = "none";
    moedas3.style.backgroundImage = "none";
  }



  //Get player position
  let maxBottom = parseInt(
    window.getComputedStyle(max).getPropertyValue("bottom")
  );

  // Get bonus position
  let pastelLeft = parseInt(
    window.getComputedStyle(pastel).getPropertyValue("left")
  );

  let comboLeft = parseInt(
    window.getComputedStyle(combo).getPropertyValue("left")
  );

  let combo2Left = parseInt(
    window.getComputedStyle(combo2).getPropertyValue("left")
  );

  let combo3Left = parseInt(
    window.getComputedStyle(combo3).getPropertyValue("left")
  );

  let moneyBonusLeft = parseInt(
    window.getComputedStyle(moneyBonus).getPropertyValue("left")
  );

  let coinBonusLeft = parseInt(
    window.getComputedStyle(coinBonus).getPropertyValue("left")
  );

  let facilBonusLeft = parseInt(
    window.getComputedStyle(facil).getPropertyValue("left")
  );

  let coinBonusLeft11 = parseInt(
    window.getComputedStyle(coinBonus11).getPropertyValue("left")
  );

  let coinBonusLeft12 = parseInt(
    window.getComputedStyle(coinBonus12).getPropertyValue("left")
  );

  let coinBonusLeft13 = parseInt(
    window.getComputedStyle(coinBonus13).getPropertyValue("left")
  );


  // Get enemy position
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  let catracaLeft = parseInt(
    window.getComputedStyle(catraca).getPropertyValue("left")
  );
  let catracaLeftTagua = parseInt(
    window.getComputedStyle(catracaTagua).getPropertyValue("left")
  );
  let catracaLeftTagua2 = parseInt(
    window.getComputedStyle(catracaTagua2).getPropertyValue("left")
  );
  let catracaLeftRecanto = parseInt(
    window.getComputedStyle(catracaRecanto).getPropertyValue("left")
  );
  let catracaLeftRecanto2 = parseInt(
    window.getComputedStyle(catracaRecanto2).getPropertyValue("left")
  );
  let catracaLeftSaoSebas = parseInt(
    window.getComputedStyle(catracaSaoSebas).getPropertyValue("left")
  );
  let catracaLeftSaoSebas2 = parseInt(
    window.getComputedStyle(catracaSaoSebas2).getPropertyValue("left")
  );

  let enemyEntulhoLeft = parseInt(
    window.getComputedStyle(enemyEntulho).getPropertyValue("left")
  );

  let worksBoardLeft = parseInt(
    window.getComputedStyle(worksBoard).getPropertyValue("left")
  );

  let boardLeft = parseInt(
    window.getComputedStyle(board).getPropertyValue("left")
  );

  let poEnemyLeft = parseInt(
    window.getComputedStyle(poEnemy).getPropertyValue("left")
  );

  // // Enemie Tagua
  // let cactoLeftTagua = parseInt(
  //   window.getComputedStyle(cactoTagua).getPropertyValue("left")
  // );

  // let catracaLeftTagua = parseInt(
  //   window.getComputedStyle(catracaTagua).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftTagua = parseInt(
  //   window.getComputedStyle(enemyEntulhoTagua).getPropertyValue("left")
  // );

  // let worksBoardLeftTagua = parseInt(
  //   window.getComputedStyle(worksBoardTagua).getPropertyValue("left")
  // );

  // let boardLeftTagua = parseInt(
  //   window.getComputedStyle(boardTagua).getPropertyValue("left")
  // );


  // let cactoLeftTagua2 = parseInt(
  //   window.getComputedStyle(cactoTagua2).getPropertyValue("left")
  // );

  // let catracaLeftTagua2 = parseInt(
  //   window.getComputedStyle(catracaTagua2).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftTagua2 = parseInt(
  //   window.getComputedStyle(enemyEntulhoTagua2).getPropertyValue("left")
  // );

  // let worksBoardLeftTagua2 = parseInt(
  //   window.getComputedStyle(worksBoardTagua2).getPropertyValue("left")
  // );

  // let boardLeftTagua2 = parseInt(
  //   window.getComputedStyle(boardTagua2).getPropertyValue("left")
  // );

  // // Enemie Recanto
  // let cactoLeftRecanto = parseInt(
  //   window.getComputedStyle(cactoRecanto).getPropertyValue("left")
  // );

  // let catracaLeftRecanto = parseInt(
  //   window.getComputedStyle(catracaRecanto).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftRecanto = parseInt(
  //   window.getComputedStyle(enemyEntulhoRecanto).getPropertyValue("left")
  // );

  // let worksBoardLeftRecanto = parseInt(
  //   window.getComputedStyle(worksBoardRecanto).getPropertyValue("left")
  // );

  // let boardLeftRecanto = parseInt(
  //   window.getComputedStyle(boardRecanto).getPropertyValue("left")
  // );


  // let cactoLeftRecanto2 = parseInt(
  //   window.getComputedStyle(cactoRecanto2).getPropertyValue("left")
  // );

  // let catracaLeftRecanto2 = parseInt(
  //   window.getComputedStyle(catracaRecanto2).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftRecanto2 = parseInt(
  //   window.getComputedStyle(enemyEntulhoRecanto2).getPropertyValue("left")
  // );

  // let worksBoardLeftRecanto2 = parseInt(
  //   window.getComputedStyle(worksBoardRecanto2).getPropertyValue("left")
  // );

  // let boardLeftRecanto2 = parseInt(
  //   window.getComputedStyle(boardRecanto2).getPropertyValue("left")
  // );

  // // Enemie SaoSebas
  // let cactoLeftSaoSebas = parseInt(
  //   window.getComputedStyle(cactoSaoSebas).getPropertyValue("left")
  // );

  // let catracaLeftSaoSebas = parseInt(
  //   window.getComputedStyle(catracaSaoSebas).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftSaoSebas = parseInt(
  //   window.getComputedStyle(enemyEntulhoSaoSebas).getPropertyValue("left")
  // );

  // let worksBoardLeftSaoSebas = parseInt(
  //   window.getComputedStyle(worksBoardSaoSebas).getPropertyValue("left")
  // );

  // let boardLeftSaoSebas = parseInt(
  //   window.getComputedStyle(boardSaoSebas).getPropertyValue("left")
  // );


  // let cactoLeftSaoSebas2 = parseInt(
  //   window.getComputedStyle(cactoSaoSebas2).getPropertyValue("left")
  // );

  // let catracaLeftSaoSebas2 = parseInt(
  //   window.getComputedStyle(catracaSaoSebas2).getPropertyValue("left")
  // );

  // let enemyEntulhoLeftSaoSebas2 = parseInt(
  //   window.getComputedStyle(enemyEntulhoSaoSebas2).getPropertyValue("left")
  // );

  // let worksBoardLeftSaoSebas2 = parseInt(
  //   window.getComputedStyle(worksBoardSaoSebas2).getPropertyValue("left")
  // );

  // let boardLeftSaoSebas2 = parseInt(
  //   window.getComputedStyle(boardSaoSebas2).getPropertyValue("left")
  // );




  // BONUS
  if (pastelLeft > -50 && pastelLeft < -17 && maxBottom > 50 && alreadyJump) {
    pastel.style.animation = "none";
    foodBonus.play();
    placar += 550;
  }
  if (comboLeft > 7 && comboLeft < 25 && maxBottom > 50 && alreadyJump) {
    combo.style.animation = "none";
    foodBonus.play();
    placar += 550;
  }
  if (combo2Left > 222 && combo2Left < 230 && maxBottom > 50 && alreadyJump) {
    combo2.style.animation = "none";
    foodBonus.play();
    placar += 550;
  }
  if (combo3Left > 120 && combo3Left < 130 && maxBottom > 50 && alreadyJump) {
    combo3.style.animation = "none";
    foodBonus.play();
    placar += 550;
  }

  // COINS
  //Facil is worth 11 miniCoins

  if (facilBonusLeft > 100 && facilBonusLeft < 300 && maxBottom > 50 && alreadyJump) {
    facil.style.backgroundImage = "none";
    miniCoins += 11;
    coin.play();
  }

  if (moneyBonusLeft > 30 && moneyBonusLeft < 60 && maxBottom > 50 && alreadyJump) {
    moneyBonus.style.animation = "none";
    coin.play();
    miniCoins += 1;
  }

  if (coinBonusLeft > 190 && coinBonusLeft < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus.style.backgroundImage = "none";
    miniCoins += 1;
    coin.play();
  }
  if (coinBonusLeft11 > 190 && coinBonusLeft11 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus11.style.animation = "none";
    miniCoins += 1;
    coin.play();
  }
  if (coinBonusLeft12 > 190 && coinBonusLeft12 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus12.style.animation = "none";
    miniCoins += 1;
    coin.play();
  }
  if (coinBonusLeft13 > 190 && coinBonusLeft13 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus13.style.animation = "none";
    miniCoins += 1;
    coin.play();
  }


  // ENEMIES RULES

  if (catracaLeft > -130 && catracaLeft < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatraca == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatraca = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftTagua > -130 && catracaLeftTagua < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaTagua == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaTagua = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftTagua2 > -130 && catracaLeftTagua2 < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaTagua2 == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaTagua2 = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftRecanto > -130 && catracaLeftRecanto < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaRecanto == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaRecanto = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftRecanto2 > -130 && catracaLeftRecanto2 < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaRecanto2 == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaRecanto2 = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftSaoSebas > -130 && catracaLeftSaoSebas < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaSaoSebas == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaSaoSebas = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }
  if (catracaLeftSaoSebas2 > -130 && catracaLeftSaoSebas2 < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatracaSaoSebas2 == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatracaSaoSebas2 = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }

  if (worksBoardLeft > 178 && worksBoardLeft < 185 && maxBottom <= 50 && !alreadyJump) {
    if (checkWork == false) {
      scoreBoardCoins -= 1;
      checkWork = true;
      damage.play();
    }
  }

  if (enemyEntulhoLeft > -150 && enemyEntulhoLeft < -130 && maxBottom <= 50 && !alreadyJump) {
    if (checkTrash == false) {
      scoreBoardCoins -= 1;
      checkTrash = true;
      damage.play();
    }
  }
  if (boardLeft > 75 && boardLeft < 100 && maxBottom <= 50 && !alreadyJump) {
    if (checkBoard == false) {
      scoreBoardCoins -= 1;
      checkBoard = true;
      damage.play();
    }
  }

  if (poEnemyLeft > 230 && poEnemyLeft < 250 && maxBottom <= 50 && !alreadyJump) {
    if (checkPoEnemy == false) {
      scoreBoardCoins -= 1;
      checkPoEnemy = true;
      damage.play();
    }
  }

  // Tagua
  if (catracaLeft > -130 && catracaLeft < -100 && maxBottom <= 50 && !alreadyJump) {
    if (checkCatraca == false) {
      scoreBoardCoins -= 1;
      placar -= 327;
      checkCatraca = true;
      damage.play();
    }
    // max.style.animation = "damage 0.25s linear 1 ";
  }

  if (worksBoardLeft > 178 && worksBoardLeft < 185 && maxBottom <= 50 && !alreadyJump) {
    if (checkWork == false) {
      scoreBoardCoins -= 1;
      checkWork = true;
      damage.play();
    }
  }

  if (enemyEntulhoLeft > -150 && enemyEntulhoLeft < -130 && maxBottom <= 50 && !alreadyJump) {
    if (checkTrash == false) {
      scoreBoardCoins -= 1;
      checkTrash = true;
      damage.play();
    }
  }
  if (boardLeft > 75 && boardLeft < 100 && maxBottom <= 50 && !alreadyJump) {
    if (checkBoard == false) {
      scoreBoardCoins -= 1;
      checkBoard = true;
      damage.play();
    }
  }

  if (poEnemyLeft > 230 && poEnemyLeft < 250 && maxBottom <= 50 && !alreadyJump) {
    if (checkPoEnemy == false) {
      scoreBoardCoins -= 1;
      checkPoEnemy = true;
      damage.play();
    }
  }

  // VICTORY
  if (count == 18000) {
    trilha.pause();
    alert(`VOTE 50100!`);
    count = 0;
  }
  count++;

  // if (count - placar == 100) {
  //   placar += 25;
  // }

  score.innerHTML = `${placar}`;
}, 10);