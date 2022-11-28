let firstCard = 10
let seconedCard = 30
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + seconedCard 
let messageEl = document.getElementById("message-el")

function startGame(){ 
if (sum < 21){
    messageEl.textContent = "Do you want to draw a new card? 🙂"
}else if(sum === 21){
    messageEl.textContent = "Wohoo! You've got a blackJack 🥳"
hasBlackJack  = true
}else{
    messageEl.textContent = "You're out of the game 😭"
isAlive= false
}

}
// CASH OUT!
