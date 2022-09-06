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


//audios
const coin = new Audio("./fx/coin.wav");
const trilha = new Audio("./fx/trilha1.ogg");
const damage = new Audio("./fx/damage.wav");


// Helpers - Coin counter helpers.It was necessary to use the helpers due to the validation of the positioning of the object on the screen.Since the way it was implemented executes the if more than once
let checkCacto = false;
let checkWork = false;
let checkTrash = false;
let checkCatraca = false;
let checkBoard = false;
let checkPoEnemy = false;

// Helper for jump
let alreadyJump = false;


// Counters
let scoreBoardCoins = 3;
let miniCoins = 0;


let check = "";
let count = 0;
let placar = 0;
let i = 0;


let totalCoins = 100;


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
    }, 1000);
  }
}

// Game loop
setInterval(() => {
  //Volume fx
  damage.volume = 0.3;


  //Game fx
  trilha.volume = 0.03;
  trilha.play();

  if (scoreBoardCoins == 2) {
    trilha.playbackRate = 1.3;
  }

  //Coin exibition rules

  // if (scoreBoardCoins < 3 && miniCoins >= 5) {
  //   scoreBoardCoins += 1;
  // }

  if (scoreBoardCoins == 3) {
    moedas.style.backgroundImage = "30px";
    moedas2.style.backgroundImage = "80px";
    moedas3.style.backgroundImage = "130px";
  }
  if (scoreBoardCoins == 2) {
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


  // BONUS
  if (pastelLeft > -50 && pastelLeft < -17 && maxBottom > 50 && alreadyJump) {
    pastel.style.animation = "none";
    coin.play();
    placar += 122;
  }
  if (comboLeft > 7 && comboLeft < 25 && maxBottom > 50 && alreadyJump) {
    console.log("combo!!!!!!");
    combo.style.animation = "none";
    coin.play();
    placar += 122;
  }
  if (combo2Left > 222 && combo2Left < 230 && maxBottom > 50 && alreadyJump) {
    console.log("combo!!22!!!!", combo2Left);
    combo2.style.animation = "none";
    coin.play();
    placar += 122;
  }
  if (combo3Left > 120 && combo3Left < 130 && maxBottom > 50 && alreadyJump) {
    console.log("combo!!333!!!!", combo3Left);
    combo3.style.animation = "none";
    coin.play();

    placar += 122;
  }
  if (moneyBonusLeft > 30 && moneyBonusLeft < 60 && maxBottom > 50 && alreadyJump) {
    console.log("moneyBonus!!!!", moneyBonusLeft);
    moneyBonus.style.animation = "none";
    console.log("moneyBonus!!!!");
    coin.play();
    coinsCount += 25;
  }

  // COINS

  if (facilBonusLeft > 100 && facilBonusLeft < 300 && maxBottom > 50 && alreadyJump) {
    facil.style.backgroundImage = "none";
    miniCoins += 5;
    coin.play();
  }
  if (coinBonusLeft > 190 && coinBonusLeft < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus.style.backgroundImage = "none";
    miniCoins += 5;
    coin.play();
  }
  if (coinBonusLeft11 > 190 && coinBonusLeft11 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus11.style.animation = "none";
    miniCoins += 5;
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
  if (count == 14800) {
    trilha.pause();
    alert(`VOTE 50100!`);
    count = 0;
  }
  count++;

  if (count - placar == 100) {
    placar += 25;
  }

  score.innerHTML = `SCORE: ${placar}`;
}, 10);