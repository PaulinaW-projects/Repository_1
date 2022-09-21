let scoreHomeEl = document.getElementById("score1-el");
let scoreGuestEl = document.getElementById("score2-el");
/*
let = scoreHomeBtn1 = document.getElementById("add1-1btn");
let = scoreHomeBtn2 = document.getElementById("add2-1btn");
let = scoreHomeBtn3 = document.getElementById("add3-1btn");
let = scoreGuestBtn1 = document.getElementById("add1-2btn");
let = scoreGuestBtn2 = document.getElementById("add2-2btn");
let = scoreGuestBtn3 = document.getElementById("add3-2btn");
*/
let scoreHome = 0;
let scoreGuest = 0;

document
  .getElementById("add1-1btn")
  .addEventListener("click", () => increaseScore(true, 1));
document
  .getElementById("add2-1btn")
  .addEventListener("click", () => increaseScore(true, 2));
document
  .getElementById("add3-1btn")
  .addEventListener("click", () => increaseScore(true, 3));
document
  .getElementById("add1-2btn")
  .addEventListener("click", () => increaseScore(false, 1));
document
  .getElementById("add2-2btn")
  .addEventListener("click", () => increaseScore(false, 2));
document
  .getElementById("add3-2btn")
  .addEventListener("click", () => increaseScore(false, 3));

/*
  let a = () => increaseScore(false, 1) //to, to samo co to niżej
  function a() {
    increaseScore(false, 1)
  }
*/
//document.getElementById("add3-2btn").addEventListener("click", addThree2);

document.getElementById("reset-btn").addEventListener("click", reset);

/*
function addOne1() {
  scoreHome += 1;
  scoreHomeEl.textContent = scoreHome;
}
function addTwo1() {
  scoreHome += 2;
  scoreHomeEl.textContent = scoreHome;
}
function addThree1() {
  scoreHome += 3;
  scoreHomeEl.textContent = scoreHome;
}
function addOne2() {
  scoreGuest += 1;
  scoreGuestEl.textContent = scoreGuest;
}
function addTwo2() {
  scoreGuest += 2;
  scoreGuestEl.textContent = scoreGuest;
}
function addThree2() {
  scoreGuest += 3;
  scoreGuestEl.textContent = scoreGuest;
}
*/

function reset() {
  scoreHome = 0;
  scoreGuest = 0;
  scoreHomeEl.textContent = scoreHome;
  scoreGuestEl.textContent = scoreGuest;
}
function increaseScore(isHome, value) {
  if (isHome) {
    scoreHome += value;
    scoreHomeEl.textContent = scoreHome;
  } else {
    scoreGuest += value;
    scoreGuestEl.textContent = scoreGuest;
  }
}
