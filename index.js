let firstCard = 10
let seconedCard = 11 
let hasBlackJack = false
let isAlive = true
let message = ''
let sum = firstCard + seconedCard

if (sum < 21){
message = "Do you want to draw a new card? 🙂"
}else if(sum === 21){
message = "Wohoo! You've got a blackJack 🥳"
hasBlackJack  = true
}else{
message = "You're out of the game 😭"
isAlive= false
}
// CASH OUT!
console.log(message)
