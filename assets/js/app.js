let score = [0,0];

let roundScore = 0;
let activePlayer = 0;


// es 5 pattern
// let currentScore0 = document.getElementById("current" + activePlayer);
// currentScore0.innerHTML = dice

//es 6 pattern of concatenation

// let currentScore0 = document.getElementById(`current${activePlayer}`);
// currentScore0.innerHTML = `<em> ${dice} </em>`
// any of this 2 methods would work

document.querySelector(`.dice`).style.display = `none`;
document.getElementById(`score-0`).innerHTML = 0;
document.getElementById(`score-1`).innerHTML = 0;
document.getElementById(`current0`).innerHTML = 0;
document.getElementById(`current1`).innerHTML = 0;
//.className="hidedice";

//target the roll btn from html class
let rollBtn = document.querySelector(`.btn-roll`);

//addEventListener function to the rollBtn on Click event
rollBtn.addEventListener(`click`, rollF)

function rollF (){
  //1 display random number
  let dice = Math.floor(Math.random() * 6) + 1;  

  //2 to display dice
  let diceDOM = document.querySelector(".dice")
  diceDOM.style.display = "block";
  diceDOM.src = `assets/images/dice${dice}.png`;
  
  //3 update the round score as long as dice is not 1
    if(dice !== 1){
        //add dice value to the roundScore
        // roundScore = roundScore + dice; 
        roundScore += dice;

        //setting the innerhtml of current box to roundScore
        document.getElementById(`current${activePlayer}`).innerHTML = roundScore;
    }
}
   

// ============================== the modal section ==============
let clickButton = document.getElementById(`clickBtn`);
let closeIcon = document.querySelector(`.close`)
let bgModal = document.querySelector(`.bg-modal`)

clickButton.addEventListener(`click`, clickbtnFtn )
closeIcon.addEventListener(`click`, closeiconFtn )

function clickbtnFtn(){
  bgModal.style.display = `flex`
}

function closeiconFtn(){
  bgModal.style.display = `none`
}


