let firstCard = 10
let seconedCard = 11
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + seconedCard 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

console.log(messageEl)
function startGame(){ 
    sumEl.textContent = `Sum: ${sum}`
if (sum < 21){
   message = "Do you want to draw a new card?"
}else if(sum === 21){
  message = "You've got a blackJack. "
hasBlackJack  = true
}else{
    message = "You're out of the game."
isAlive= false
}
messageEl.textContent = message
}
// CASH OUT!
