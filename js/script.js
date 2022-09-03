const max = document.querySelector(".max");
const cacto = document.querySelector(".cacto");
const catraca = document.querySelector(".catraca");
const score = document.querySelector(".score");
const moedas = document.querySelector(".moedas");
const moedas2 = document.querySelector(".moedas2");
const moedas3 = document.querySelector(".moedas3");
const buraco = document.querySelector(".buraco");
const pastel = document.querySelector(".pastel");
const combo = document.querySelector(".combo");
const enemyEntulho = document.querySelector(".enemyEntulho");


//audios
const coin = new Audio("./fx/coin.wav");


let alreadyJump = false;
let count = 0;
let placar = 0;

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
  let pastelBottom = parseInt(
    window.getComputedStyle(pastel).getPropertyValue("bottom")
  );
  let pastelLeft = parseInt(
    window.getComputedStyle(pastel).getPropertyValue("left")
  );
  let comboBottom = parseInt(
    window.getComputedStyle(combo).getPropertyValue("bottom")
  );
  let comboLeft = parseInt(
    window.getComputedStyle(combo).getPropertyValue("left")
  );
  let maxBottom = parseInt(
    window.getComputedStyle(max).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );
  let catracaLeft = parseInt(
    window.getComputedStyle(catraca).getPropertyValue("left")
  );
  let enemyEntulhoLeft = parseInt(
    window.getComputedStyle(enemyEntulho).getPropertyValue("left")
  );
  let buracoLeft = parseInt(
    window.getComputedStyle(buraco).getPropertyValue("left")
  );

  console.log(comboLeft, pastelLeft, maxBottom);

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



  // ENEMYS

  if (cactoLeft > 40 && cactoLeft < 175 && maxBottom <= 50 && !alreadyJump) {
    if (moedas3.style.left == "130px") {

      moedas3.style.left = 0;
    }
    if (moedas2.style.left == "80px" && moedas3.style.left != "130px") {
      moedas2.style.left = 0;

      count = 0;
    }
    if (moedas.style.left == "30px" && moedas2.style.left != "80px") {
      moedas.style.left = 0;
      alert(`Game Over! Seu score foi: ${placar}`);
      count = 0;
    }
  }
  if (catracaLeft > -200 && catracaLeft < -100 && maxBottom <= 50 && !alreadyJump) {
    if (moedas3.style.left == "130px") {

      moedas3.style.left = 0;
    }
    if (moedas2.style.left == "80px" && moedas3.style.left != "130px") {
      moedas2.style.left = 0;

      count = 0;
    }
    if (moedas.style.left == "30px" && moedas2.style.left != "80px") {
      moedas.style.left = 0;
      alert(`Game Over! Seu score foi: ${placar}`);
      count = 0;
    }
  }
  if (enemyEntulhoLeft > -200 && enemyEntulhoLeft < -130 && maxBottom <= 50 && !alreadyJump) {
    if (moedas3.style.left == "130px") {

      moedas3.style.left = 0;
    }
    if (moedas2.style.left == "80px" && moedas3.style.left != "130px") {
      moedas2.style.left = 0;

      count = 0;
    }
    if (moedas.style.left == "30px" && moedas2.style.left != "80px") {
      moedas.style.left = 0;
      alert(`Game Over! Seu score foi: ${placar}`);
      count = 0;
    }
  }
  if (buracoLeft > -200 && buracoLeft < 185 && maxBottom <= 50 && !alreadyJump) {
    if (moedas3.style.left == "130px") {

      moedas3.style.left = 0;
    }
    if (moedas2.style.left == "80px" && moedas3.style.left != "130px") {
      moedas2.style.left = 0;

      count = 0;
    }
    if (moedas.style.left == "30px" && moedas2.style.left != "80px") {
      moedas.style.left = 0;
      alert(`Game Over! Seu score foi: ${placar}`);
      count = 0;
    }
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