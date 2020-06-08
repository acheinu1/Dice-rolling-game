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
document.querySelector(".dice").style.display = "none";
//.className="hidedice";


let rollBtn = document.querySelector(".btn-roll");

rollBtn.addEventListener("click", Roll)

function Roll(){
    //1 display random number
    let dice = Math.floor(Math.random() * 6) + 1;

    //2 display the result with dice img 
     var diceDOM = document.querySelector(".dice")
    diceDOM.style.display="block";

    //3 update the roundscore if random number is not 1
}

