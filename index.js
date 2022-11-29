let firstCard = getRandomCard()
let seconedCard = getRandomCard()
let cards =[firstCard, seconedCard]

let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + seconedCard 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
  return Math.floor(Math.random() * 13 ) + 1
}

function startGame(){
  renderGame()
}

function renderGame(){ 
  cardEl.textContent = `Card: `
  
  for (let i =0; i < cards.length; i ++){
cardEl.textContent +=  cards[i] + " "
    }

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

function newCard(){
  let card = getRandomCard()
    sum += card 
    cards.push(card)
    console.log(cards)
   renderGame()
 
}
