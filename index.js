let firstCard = 10
let seconedCard = 21 
let hasBlackJack = false
let isAlive = true

let sum = firstCard + seconedCard

if (sum < 21){
console.log("Do you want to draw a new card? 🙂")
}else if(sum === 21){
console.log("Wohoo! You've got a blackJack 🥳")
hasBlackJack  = true
}else{
console.log("You're out of the game 😭")
isAlive= false
}
// CASH OUT!
console.log(hasBlackJack)
console.log(isAlive)