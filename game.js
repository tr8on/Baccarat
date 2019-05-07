const values = [2, 3, 4, 5, 6, 7, 8, 9, "10", "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let firstPlayerCard = null;
let firstBankerCard = null;
let secondPlayerCard = null;
let secondBankerCard = null;

let thirdPlayerCard = 0;
let thirdBankerCard = 0;
let playerTotal = null;
let bankerTotal = null;


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
  
  
  deck.splice(randomIndex, 1);
  deck.splice(randomIndex2, 1);
  deck.splice(randomIndex3, 1);
  deck.splice(randomIndex4, 1);
  deck.splice(randomIndex5, 1);
  deck.splice(randomIndex6, 1);
}

function announceCards() {
  console.log(`Player has ${firstPlayerCard.num} of ${firstPlayerCard.suit} and a ${secondPlayerCard.num} of ${secondPlayerCard.suit}, Banker has ${firstBankerCard.num} of ${firstBankerCard.suit} and a ${secondBankerCard.num} of ${secondBankerCard.suit}`);
}


function cardToRank(card) {
  if (card.value === 'Ace') {
    return 1
  }
  if (card.value === 'Jack') {
    return 0
  }
  if (card.value === 'Queen') {
    return 0
  }
  if (card.value === 'King') {
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
 

  // playerTotal = firstPCardRank + secondPCardRank + thirdPCardRank;
  // bankerTotal = firstBCardRank + secondBCardRank + thirdBCardRank;
  playerTotal = firstPCardRank + secondPCardRank;
  bankerTotal = firstBCardRank + secondBCardRank;

  if (playerTotal >= 10){
    playerTotal -= 10;
  }
  if (bankerTotal >= 10){
    bankerTotal -= 10;
  }
  console.log(playerTotal)
 console.log(bankerTotal)
// Player's rule
// If the player has an initial total of 0–5, he draws a third card. If the player has an initial total of 6 or 7, he stands.
// Banker's rule
// If the player stood pat (i.e., has only two cards), the banker regards only his own hand and acts according to the same rule as the player. That means the banker draws a third card with hands 0–5 and stands with 6 or 7.   -Baccarat wikipedia 
    if(playerTotal <8 && bankerTotal < 8){  // game rules if player or banker draws an 8 or 9 total on first 2 cards no aditional cards will be drawn
        if (playerTotal <= 5){
            playerthirdCardDraw()
        }
        if (bankerTotal <= 5){
            bankerthirdCardDraw()
        }
    }else{   
            announceWinner();
        }
}
 const playerthirdCardDraw =()=>{
   let thirdPCardRank = cardToRank(thirdPlayerCard)
   playerTotal += thirdPCardRank;
   if(playerTotal >=10){
       playerTotal -= 10
       announceWinner();
   }
   console.log(`Player drew a 3rd card: ${thirdPlayerCard.num} of ${thirdPlayerCard.suit}
   new  3 card player total = ${playerTotal}`)
 }
const bankerthirdCardDraw=() =>{

  let thirdBCardRank = cardToRank(thirdBankerCard)
   bankerTotal += thirdBCardRank
   if(bankerTotal >=10){
    bankerTotal -= 10
    announceWinner();
}
 console.log(`Banker drew a 3rd card: ${thirdBankerCard.num} of ${thirdBankerCard.suit}
  new 3 card banker total = ${bankerTotal}`)
 }

 
const announceWinner=()=> {

  if (bankerTotal > playerTotal) {
    console.log('Player Wins')
  } else if (bankerTotal < playerTotal) {
    console.log('Player 2 Wins');
  } else {
    console.log("It's a draw");
  }
}

function returnCardsToDeck() {
    deck.push(firstPlayerCard);
    deck.push(firstBankerCard) 
    deck.push(secondPlayerCard)
    deck.push(secondBankerCard)
    deck.push(thirdPlayerCard)
    deck.push(thirdBankerCard)
}

function playGame() {
  drawCard();
  announceCards();
  twoHandTotal();
  //announceWinner();
 // returnCardsToDeck();
}

buildDeck(values, suits);
playGame();