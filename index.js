
let cards =[]
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13 ) + 1
  if(randomNumber > 10){
   return 13
  }else if(randomNumber === 1){
  return 1
  }else{
 return randomNumber
  }
}

function startGame(){
  isAlive = true
  firstCard = getRandomCard()
  seconedCard = getRandomCard()
  cards =[firstCard, seconedCard]
  sum = firstCard + seconedCard
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
