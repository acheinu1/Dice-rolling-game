const score = [0,0];

const roundScore = 0;
const activePlayer = 1;


// es 5 pattern
// let currentScore0 = document.getElementById("current" + activePlayer);
// currentScore0.innerHTML = dice

//es 6 pattern of concatenation

// let currentScore0 = document.getElementById(`current${activePlayer}`);
// currentScore0.innerHTML = `<em> ${dice} </em>`
// any of this 2 methods would work

document.querySelector(`.dice`).style.display = `none`;
//.className="hidedice";

//target the roll btn from html class
let rollBtn = document.querySelector(`.btn-roll`);

//addEventListener function to the rollBtn on Click event
rollBtn.addEventListener(`click`, rollF)

function rollF (){
  //1 display random number
  let dice = Math.floor(Math.random() * 6) + 1;  

  // to display dice
  let diceDOM = document.querySelector(".dice")
  diceDOM.style.display = "block";
  diceDOM.src = `assets/images/dice${dice}.png`
}
   



