//dice one..
const randomNumber1 = diceRoll()
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1)

//dice Two..
const randomNumber2 = diceRoll()
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

//win condition
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two Wins!"
} else {
  document.querySelector("h1").innerHTML = "It's a draw!"
}
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1
}
