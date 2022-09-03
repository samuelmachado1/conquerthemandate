const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const catraca = document.querySelector(".catraca");
const score = document.querySelector(".score");
const buraco = document.querySelector(".buraco");
let alreadyJump = false;
let count = 0;

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
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );
  let catracaLeft = parseInt(
    window.getComputedStyle(catraca).getPropertyValue("left")
  );
  let buracoLeft = parseInt(
    window.getComputedStyle(buraco).getPropertyValue("left")
  );

  console.log(buracoLeft, alreadyJump);

  if (cactoLeft > 40 && cactoLeft < 120 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }
  if (catracaLeft > -200 && catracaLeft < -150 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }
  if (buracoLeft > -200 && buracoLeft < 110 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }
  if (count > 13350) {
    alert(`VOTE 50100!`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);