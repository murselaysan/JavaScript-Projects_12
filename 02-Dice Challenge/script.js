const randomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}

let startButton = document.getElementById('start')
let dice1 = document.getElementById('dice_A')
let dice2 = document.getElementById('dice_B')

const player1 = document.getElementById('player_1');
const player2 = document.getElementById('player_2');



startButton.onclick = () => {
let randomNumber1 = randomNum() ;
let randomNumber2 = randomNum() ;
//let randomImageSourse2 = "images/dice" + randomNum() + ".png";
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);
dice1.src = "images/dice" + randomNumber1 + ".png";
dice2.src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!!!";
  player1.className = 'player-win';
  player2.className = '';

}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!!!";
  player2.className = 'player-win';
  player1.className = '';
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
  player1.className = '';
  player2.className = '';

}
};

