const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let firstPlayerCard = null;
let firstBankerCard = null;
let secondPlayerCard = null;
let secondBankerCard = null;
let thirdPlayerCard = null;
let thirdBankerCard = null;

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
  console.log(`Player 1 has ${firstPlayerCard.num} of ${firstPlayerCard.suit} and a ${secondPlayerCard.num} of ${secondPlayerCard.suit}, Player 2 has ${firstBankerCard.num} of ${firstBankerCard.suit} and a ${secondBankerCard.num} of ${secondBankerCard.suit}`);
}


function playGame() {
  drawCard();
  announceCards();
  //announceWinner();
 // returnCardsToDeck();
}

buildDeck(values, suits);
playGame();