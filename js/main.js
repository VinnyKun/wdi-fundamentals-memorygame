console.log("Up and running!");
console.log("how bow now");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("user flipped " + cardOne);

var cardTwo = cards[3];

cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!")
	else
		alert("sorry, try again")
}