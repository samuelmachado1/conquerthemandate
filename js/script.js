const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const catraca = document.querySelector(".catraca");
const score = document.querySelector(".score");
const buraco = document.querySelector(".buraco");
const pastel = document.querySelector(".pastel");
const enemyEntulho = document.querySelector(".enemyEntulho");
let alreadyJump = false;
let count = 0;
let placar = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      dino.classList.remove("jump");
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
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
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

  console.log(pastelBottom, pastelLeft, dinoBottom);

  if (cactoLeft > 40 && cactoLeft < 175 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${placar}`);
    count = 0;
  }
  if (catracaLeft > -200 && catracaLeft < -100 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${placar}`);
    count = 0;
  }
  if (pastelLeft > -20 && pastelLeft < 0 && dinoBottom > 50 && alreadyJump) {
    placar.style.animation = "none";
    count = 0;
  }
  if (enemyEntulhoLeft > -200 && enemyEntulhoLeft < -130 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${placar}`);
    count = 0;
  }
  if (buracoLeft > -200 && buracoLeft < 185 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${placar}`);
    count = 0;
  }
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