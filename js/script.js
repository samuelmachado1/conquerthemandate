// Player
const max = document.querySelector(".max");

// Dynamic screen items
const score = document.querySelector(".score");
const scoreCoins = document.querySelector(".scoreCoins");
const moedas = document.querySelector(".moedas");
const moedas2 = document.querySelector(".moedas2");
const moedas3 = document.querySelector(".moedas3");

// Bonus
const moneyBonus = document.querySelector(".moneyBonus");
const coinBonus = document.querySelector(".coinBonus");
const coinBonus11 = document.querySelector(".coinBonus11");
const coinBonus12 = document.querySelector(".coinBonus12");
const coinBonus13 = document.querySelector(".coinBonus13");
const pastel = document.querySelector(".pastel");
const combo = document.querySelector(".combo");

// Enemies
const cacto = document.querySelector(".cacto");
const catraca = document.querySelector(".catraca");
const worksBoard = document.querySelector(".worksBoard");
const enemyEntulho = document.querySelector(".enemyEntulho");


//audios
const coin = new Audio("./fx/coin.wav");

let check = "";
let alreadyJump = false;
let count = 0;
let placar = 0;
let i = 0;
let coinsCount = 0;

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
    }, 1100);
  }
}

setInterval(() => {

  //Player

  let maxBottom = parseInt(
    window.getComputedStyle(max).getPropertyValue("bottom")
  );

  //Coins

  let coin1Position = parseInt(
    window.getComputedStyle(moedas).getPropertyValue("left")
  );

  let coin2Position = parseInt(
    window.getComputedStyle(moedas2).getPropertyValue("left")
  );

  let coin3Position = parseInt(
    window.getComputedStyle(moedas3).getPropertyValue("left")
  );

  //Bonus

  let pastelLeft = parseInt(
    window.getComputedStyle(pastel).getPropertyValue("left")
  );

  let comboLeft = parseInt(
    window.getComputedStyle(combo).getPropertyValue("left")
  );

  let moneyBonusLeft = parseInt(
    window.getComputedStyle(moneyBonus).getPropertyValue("left")
  );

  let coinBonusLeft = parseInt(
    window.getComputedStyle(coinBonus).getPropertyValue("left")
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


  //Enemies

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


  console.log(coinBonusLeft12);
  // BONUS
  if (pastelLeft > -50 && pastelLeft < -17 && maxBottom > 50 && alreadyJump) {
    pastel.style.animation = "none";
    coin.play();
    placar += 122;
  }
  if (comboLeft > -200 && comboLeft < 0 && maxBottom > 50 && alreadyJump) {
    combo.style.animation = "none";
    coin.play();
    placar += 122;
  }
  if (moneyBonusLeft > 190 && moneyBonusLeft < 200 && maxBottom > 50 && alreadyJump) {
    moneyBonus.style.animation = "none";
    coin.play();
    coinsCount += 25;
  }
  if (coinBonusLeft > 190 && coinBonusLeft < 200 && maxBottom > 50 && alreadyJump) {
    moneyBonus.style.animation = "none";
    coin.play();
    coinsCount += 25;
  }
  if (coinBonusLeft11 > 190 && coinBonusLeft11 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus11.style.animation = "none";
    coin.play();
    coinsCount += 25;
  }
  if (coinBonusLeft12 > 190 && coinBonusLeft12 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus12.style.animation = "none";
    coin.play();
    coinsCount += 25;
  }
  if (coinBonusLeft13 > 190 && coinBonusLeft13 < 200 && maxBottom > 50 && alreadyJump) {
    coinBonus13.style.animation = "none";
    coin.play();
    coinsCount += 25;
  }



  // ENEMIES RULES

  if (cactoLeft > 168 && cactoLeft < 175 && maxBottom <= 50 && !alreadyJump) {
    moedas3.style.left = -50 + "px";
    check = "cacto";
  }

  if (worksBoardLeft > 178 && worksBoardLeft < 185 && maxBottom <= 50 && !alreadyJump) {
    if (coin3Position == 130) {
      moedas3.style.left = -50 + "px";
    }
    if (coin2Position == 80 && coin3Position !== 130 && check == "cacto") {
      moedas2.style.left = -50 + "px";
    }
    check = "worksBoard";
  }

  if (enemyEntulhoLeft > -150 && enemyEntulhoLeft < -130 && maxBottom <= 50 && !alreadyJump) {
    if (coin3Position == 130) {
      moedas3.style.left = -50 + "px";
    }
    if (coin2Position == 80 && coin3Position !== 130 && check == "cacto" || check == "worksBoard") {
      moedas2.style.left = -50 + "px";
      check = "enemyEntulho";
    }
    if (coin1Position == 30 && coin2Position !== 80 && coin3Position !== 130 && check == "cacto" || check == "worksBoard") {
      moedas.style.left = -50 + "px";
    }
    check = "enemyEntulho";
  }
  if (catracaLeft > -130 && catracaLeft < -100 && maxBottom <= 50 && !alreadyJump) {
    if (coin3Position == 130) {
      moedas3.style.left = -50 + "px";
    }
    if (coin2Position == 80 && coin3Position !== 130) {
      moedas2.style.left = -50 + "px";
    }
    if (coin1Position == 30 && coin2Position !== 80 && coin3Position !== 130) {
      moedas.style.left = -50 + "px";
    }
    // if (coin2Position !== 80 && coin3Position !== 130 && coin1Position !== 30) {
    //   alert(`Game Over! Seu score foi: ${placar}`);
    //   count = 0;
    // }
  }





  // VICTORY
  if (count > 11800) {
    alert(`VOTE 50100!`);
    count = 0;
  }
  count++;

  if (count - placar == 100) {
    placar += 25;
  }

  score.innerHTML = `SCORE: ${placar}`;
}, 10);