console.log("Up and running!");
console.log("how bow now");

// global arrays
var cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "King",
	suit: "hearts",
	cardImage: "images/King-of-hearts.png",
},
{
	rank: "King",
	suit: "diamonds",
	cardImage: "images/King-of-diamonds.png",
}

];

var cardsInPlay = [];


//check for match function
var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else
		alert("sorry, try again")
};

// game logic function
var flipCard = function () {

var cardId = this.getAttribute('data-id');

console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	checkForMatch();
}

};

var createBoard = function(){
	for (var i = 0; i < 4 ; i += 1 ){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);	
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard ();






