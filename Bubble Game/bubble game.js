let Timer = 60;
let score = 0;
let newHit = 0;

function getScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  newHit = Math.floor(Math.random() * 189);
  document.querySelector("#hitval").textContent = newHit;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 189; i++) {

    const num = Math.floor(Math.random() * 189);
    clutter += `<div class="bubble">${num}</div>`;

  }

  document.querySelector("#pbottom").innerHTML = clutter;

}


function runTimer() {
  let TimerEl = setInterval(function () {
    if (Timer > 0) {
      Timer--;
      document.querySelector("#timerval").textContent = Timer;
    } else {
      clearInterval(TimerEl);
      document.querySelector("#pbottom").innerHTML = `<h1> Game Over<\h1>`;
    }
  }, 1000)
}

document.querySelector("#pbottom").addEventListener("click", function (details) {

  let clickedNumber = Number(details.target.textContent);

  if (clickedNumber === newHit) {
    getScore();
    makeBubble();
    getNewHit();

  }

});


runTimer();
makeBubble();
getNewHit();
