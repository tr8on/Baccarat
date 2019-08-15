
const values = [2, 3, 4, 5, 6, 7, 8, 9, "10", "J", "Q", "K", "A"]; //10 and face cards = 0 in game 
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let deck = [];
let firstPlayerCard = null;
let firstBankerCard = null;
let secondPlayerCard = null;
let secondBankerCard = null;
let thirdPlayerCard = 0;
let thirdBankerCard = 0;
let playerTotal = null;
let bankerTotal = null;
let amountSubmit = document.querySelector('#submit');
let currentWager = 0
let h3 = document.querySelector("h3") //balance/wageramt
let fiveBet = document.querySelector('#chips5');
let tenBet = document.querySelector('#chips10')
let twentyBet = document.querySelector('#chips20')
fiveBet.addEventListener('click', wagerFive);
tenBet.addEventListener('click', wagerTen);
twentyBet.addEventListener('click', wagerTwenty);
let createCard = [];
let playerBetButton = document.querySelector(".bet-player")
let tieBetButton = document.querySelector(".tie-bet")
let bankerBetButton = document.querySelector(".Banker-bet")
playerBetButton.addEventListener('click', betPlayer);
tieBetButton.addEventListener('click', tiePlayer);
bankerBetButton.addEventListener('click', betBanker);
let chipStack = document.createElement('img')
playerBool = false;
tieBool = false;
bankerBool = false;
let submitBet = document.querySelector(".submit-bet")
submitBet.addEventListener('click', betSubmit);
let gameVisible = document.querySelector(".game")
let hideChips = document.querySelector(".btn-group")
let restartGame = document.querySelector(".new-game")

function betSubmit(){
    if((playerBool || tieBool || bankerBool === true) && currentWager > 0){
    h3.style.display = "none";
    gameVisible.style.display ="contents";
    //restartGame.style.display ="block";
    hideChips.style.display = "none"
    playGame();
    }
}
function betPlayer(){
    chipStack.setAttribute("src", "stack.png")
    chipStack.style.height = '100px';
    chipStack.style.width = '100px';
    playerBetButton.appendChild(chipStack)
    playerBool = true;
    tieBool = false;
    bankerBool = false;
}
function tiePlayer(){
    chipStack.setAttribute("src", "stack.png")
    chipStack.style.height = '100px';
    chipStack.style.width = '100px';
    tieBetButton.appendChild(chipStack)
    playerBool = false;
    tieBool = true;
    bankerBool = false;
}
function betBanker(){
    chipStack.setAttribute("src", "stack.png")
    chipStack.style.height = '100px';
    chipStack.style.width = '100px';
    bankerBetButton.appendChild(chipStack)
    playerBool = false;
    tieBool = false;
    bankerBool = true;
}

function wagerFive(){
    currentWager += 5;
    h3.innerHTML = `Your currently betting $${currentWager}`  
}
function wagerTen(){
    currentWager += 10;
    h3.innerHTML = `Your currently betting $${currentWager}`
}
function wagerTwenty(){
    currentWager += 20;
    h3.innerHTML = `Your currently betting $${currentWager}`
}

function wager (){
event.preventDefault()
}
function buildDeck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i+=1) {
    for (let j = 0; j < arr2.length; j+=1) {
      let card = {
        num: arr1[i], 
        suit: arr2[j], 
        value: arr1[i] 
      }
      deck.push(card);
    }
  }
  return deck;
}
function shuffle(deck){

}
function drawCard() {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let randomIndex2 = Math.floor(Math.random() * deck.length);
  let randomIndex3 = Math.floor(Math.random() * deck.length);
  let randomIndex4 = Math.floor(Math.random() * deck.length);
  let randomIndex5 = Math.floor(Math.random() * deck.length);
  let randomIndex6 = Math.floor(Math.random() * deck.length);
  firstPlayerCard = deck[randomIndex] ;
  firstBankerCard = deck[randomIndex2];
  secondPlayerCard = deck[randomIndex3];
  secondBankerCard = deck[randomIndex4];
  thirdPlayerCard = deck[randomIndex5];
  thirdBankerCard = deck[randomIndex6];
  
  createCard.push(firstPlayerCard)
  createCard.push(secondPlayerCard)
  createCard.push(thirdPlayerCard)// NEED TO POP FROM THIS ARRAY AFTER HAND
  createCard.push(firstBankerCard)
  createCard.push(secondBankerCard)
  createCard.push(thirdBankerCard)
  deck.splice(randomIndex, 1);
  deck.splice(randomIndex2, 1);
  deck.splice(randomIndex3, 1);
  deck.splice(randomIndex4, 1);
  deck.splice(randomIndex5, 1);
  deck.splice(randomIndex6, 1);
  createCards(randomIndex);
  createCards(randomIndex2);
  createCards(randomIndex3);
  createCards(randomIndex4);
  //put these in draw 3rd card fcn so they dont pop up when not needed
  createCards(randomIndex5);
  createCards(randomIndex6);
  announceCards();
}

function announceCards() {
    console.log(`Player has ${firstPlayerCard.num} of 
  ${firstPlayerCard.suit} and a ${secondPlayerCard.num} of 
  ${secondPlayerCard.suit}, Banker has ${firstBankerCard.num} of 
  ${firstBankerCard.suit} and a ${secondBankerCard.num} of ${secondBankerCard.suit}`);
  twoHandTotal();

}

let cardOne = document.getElementById("cardOne")
let cardTwo = document.getElementById("cardTwo")
let cardThree = document.getElementById("cardThree")
let cardFour = document.getElementById("cardFour")
let cardFive = document.getElementById("cardFive")
let cardSix = document.getElementById("cardSix")


function createCards(){
    cardOne.setAttribute("value", `${createCard[0].num}` )
    cardTwo.setAttribute("value", `${createCard[1].num}`)
    cardFour.setAttribute("value", `${createCard[3].num}`)
    cardFive.setAttribute("value", `${createCard[4].num}`)
    createSuit();
}
let img = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')
let img4 = document.createElement('img')
let img5 = document.createElement('img')
let img6 = document.createElement('img')
function createSuit(){
  if (firstPlayerCard.suit === "Clubs"){
    img.setAttribute("src", "club.png")
    cardOne.appendChild(img)
  } else if (firstPlayerCard.suit === "Hearts"){
    img.setAttribute("src", "heart.png")
    cardOne.appendChild(img)
  } else if (firstPlayerCard.suit === "Spades"){
    img.setAttribute("src", "spade.jpg")
    cardOne.appendChild(img)
  }if (firstPlayerCard.suit === "Diamonds"){
    img.setAttribute("src", "diamond.png")
    cardOne.appendChild(img)
  }
  if (secondPlayerCard.suit === "Clubs"){
    img2.setAttribute("src", "club.png")
    cardTwo.appendChild(img2)
  } else if (secondPlayerCard.suit === "Hearts"){
    img2.setAttribute("src", "heart.png")
    cardTwo.appendChild(img2)
  } else if (secondPlayerCard.suit === "Spades"){
    img2.setAttribute("src", "spade.jpg")
    cardTwo.appendChild(img2)
  }if (secondPlayerCard.suit === "Diamonds"){
    img2.setAttribute("src", "diamond.png")
    cardTwo.appendChild(img2)
  }
  
  if (firstBankerCard.suit === "Clubs"){
    img4.setAttribute("src", "club.png")
    cardFour.appendChild(img4)
  } else if (firstBankerCard.suit === "Hearts"){
    img4.setAttribute("src", "heart.png")
    cardFour.appendChild(img4)
  } else if (firstBankerCard.suit === "Spades"){
    img4.setAttribute("src", "spade.jpg")
    cardFour.appendChild(img4)
  }if (firstBankerCard.suit === "Diamonds"){
    img4.setAttribute("src", "diamond.png")
    cardFour.appendChild(img4)
  }
  if (secondBankerCard.suit === "Clubs"){
    img5.setAttribute("src", "club.png")
    cardFive.appendChild(img5)
  } else if (secondBankerCard.suit === "Hearts"){
    img5.setAttribute("src", "heart.png")
    cardFive.appendChild(img5)
  } else if (secondBankerCard.suit === "Spades"){
    img5.setAttribute("src", "spade.jpg")
    cardFive.appendChild(img5)
  }if (secondBankerCard.suit === "Diamonds"){
    img5.setAttribute("src", "diamond.png")
    cardFive.appendChild(img5)
  }
}


function cardToRank(card) {
  if (card.value === 'A') {
    return 1
  }
  if (card.value === 'J') {
    return 0
  }
  if (card.value === 'Q') {   //game rules facecards and 10 = 0
    return 0
  }
  if (card.value === 'K') {
    return 0
  }
  if (card.value === '10') {
    return 0
  } else {
    return card.value
  }
}

function twoHandTotal() {
  let firstPCardRank = cardToRank(firstPlayerCard)
  let firstBCardRank = cardToRank(firstBankerCard)
  let secondPCardRank = cardToRank(secondPlayerCard)
  let secondBCardRank = cardToRank(secondBankerCard)
  playerTotal = firstPCardRank + secondPCardRank;
  bankerTotal = firstBCardRank + secondBCardRank;

  if (playerTotal >= 10){
    playerTotal -= 10;
  }
  if (bankerTotal >= 10){
    bankerTotal -= 10;
  }
  if((playerTotal <8 && bankerTotal < 8) && (playerTotal == bankerTotal)){
  announceWinner();
  }
  
// Player's rule
// If the player has an initial total of 0–5, he draws a third card. If the player has an initial total of 6 or 7, he stands.
// Banker's rule
// If the player stood pat (i.e., has only two cards), the banker regards only his own hand and acts according to the same rule as the player. That means the banker draws a third card with hands 0–5 and stands with 6 or 7.   -Baccarat wikipedia 
    if(playerTotal <8 && bankerTotal < 8){  // game rules if player or banker draws an 8 or 9 total on first 2 cards no aditional cards will be drawn
        if (playerTotal <= 5){
            playerthirdCardDraw()
        }else{
            announceWinner();
        }
        if (bankerTotal <= 5){
            bankerthirdCardDraw()
        }else{
            announceWinner();
        }
    }else{   
            announceWinner();
        }
}
 const playerthirdCardDraw =()=>{
   let thirdPCardRank = cardToRank(thirdPlayerCard)
   playerTotal += thirdPCardRank;
   cardThree.setAttribute("value", `${createCard[2].num}`)
   if (thirdPlayerCard.suit === "Clubs"){
    img3.setAttribute("src", "club.png")
    cardThree.appendChild(img3)
  } else if (thirdPlayerCard.suit === "Hearts"){
    img3.setAttribute("src", "heart.png")
    cardThree.appendChild(img3)
  } else if (thirdPlayerCard.suit === "Spades"){
    img3.setAttribute("src", "spade.jpg")
    cardThree.appendChild(img3)
  }if (thirdPlayerCard.suit === "Diamonds"){
    img3.setAttribute("src", "diamond.png")
    cardThree.appendChild(img3)
  }
   if(playerTotal >=10){
       playerTotal -= 10
       console.log(`players 3 hand total ${playerTotal}`)
  
       announceWinner();
   }else{
    announceWinner()
    }
   console.log(`Player drew a 3rd card: ${thirdPlayerCard.num} of ${thirdPlayerCard.suit}
   new  3 card player total = ${playerTotal}`)
 }
const bankerthirdCardDraw=() =>{

  let thirdBCardRank = cardToRank(thirdBankerCard)
   bankerTotal += thirdBCardRank
   cardSix.setAttribute("value", `${createCard[5].num}`)
   if (thirdBankerCard.suit === "Clubs"){
    img6.setAttribute("src", "club.png")
    cardSix.appendChild(img6)
  } else if (thirdBankerCard.suit === "Hearts"){
    img6.setAttribute("src", "heart.png")
    cardSix.appendChild(img6)
  } else if (thirdBankerCard.suit === "Spades"){
    img6.setAttribute("src", "spade.jpg")
    cardSix.appendChild(img6)
  }if (thirdBankerCard.suit === "Diamonds"){
    img6.setAttribute("src", "diamond.png")
    cardSix.appendChild(img6)
  }
  
   if(bankerTotal >=10){
    bankerTotal -= 10;
    console.log(`players Two hand total ${bankerTotal}`)
    announceWinner();
    }else{
        console.log('tie')
        announceWinner()
    }
 console.log(`Banker drew a 3rd card: ${thirdBankerCard.num} of ${thirdBankerCard.suit}
  new 3 card banker total = ${bankerTotal}`)
 }

 let h1 = document.getElementById("announce-winner") //announce winner 
const announceWinner=()=> {
    if(playerTotal === bankerTotal){
        
        if (tieBool === true){
            currentWager = currentWager * 8;
            h1.innerHTML = `It's a draw You Won $${currentWager}`
        }else{
            h1.innerHTML = `It's a draw You lost $${currentWager}`
        }
    }
  if (bankerTotal > playerTotal) {
      if (bankerBool === true){
          currentWager = currentWager + currentWager;
          h1.innerHTML = `Banker Wins You Won $${currentWager}`
      }else{
        h1.innerHTML = `Banker Wins You Lost $${currentWager}`
      }
    
  } else if (bankerTotal < playerTotal) {
      if (playerBool === true){
        currentWager = currentWager + currentWager
        h1.innerHTML = `Player Wins You Won $${currentWager}`
      }else{
        h1.innerHTML = `Player Wins You Lost $${currentWager}`
      }
     
  } 
  returnCardsToDeck();
}

function returnCardsToDeck() {
    deck.push(firstPlayerCard);
    deck.push(firstBankerCard) 
    deck.push(secondPlayerCard)
    deck.push(secondBankerCard)
    deck.push(thirdPlayerCard)
    deck.push(thirdBankerCard)
    //createCard = []
}

function playGame() {
  
  drawCard();
  

}

buildDeck(values, suits);

