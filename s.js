const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes){
  const index  = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole){
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) {
      peep();
    }
    else {
      last();
    }
  }, time);
}
function startGame() {
  var playtym = prompt("Enter time in second");
  document.getElementById("win").innerHTML = "Can you score " + playtym +" points in "+ playtym + " second";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, playtym*1000)
}
function wack(e){
  if(!e.isTrusted) return;
  var last = score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;

}
function last(){
  alert("Your score : " + score);
}
moles.forEach(mole => mole.addEventListener('click', wack));
