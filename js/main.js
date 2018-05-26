console.log("Up and running!");
console.log("how bow now");

// global arrays
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//check for match function
var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else
		alert("sorry, try again")
};

// game logic function
var flipCard = function (cardId) {

console.log("user flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {
	checkForMatch();
}
};

flipCard(0);
flipCard(2);