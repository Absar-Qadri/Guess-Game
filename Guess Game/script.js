"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  }
  // if (guess > secretNumber) {
  //   document.querySelector(".message").textContent = "📈 You Went High";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }

  // if (guess < secretNumber) {
  //   document.querySelector(".message").textContent = "📉 You Went Low";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
  if (guess != secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = "📈 You Went High";
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "📉 You Went Low";
    }
  }
  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Guess";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".white-logo").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".scored").textContent = highscore;
    }
  }
  if (score == 0) {
    document.querySelector(".message").textContent = "😓 You Lost The Game";
  }
});

document.querySelector(".retry-btn").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".white-logo").textContent = "?";
  document.querySelector(".guess").value = "";
});
