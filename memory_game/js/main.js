const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];

function checkForMatch() {
	let x = cardsInPlay.length;
	if (x%2 === 0 && x > 0) {
		if (cardsInPlay[x-1] === cardsInPlay[x-2]) {
			alert("You found a match");
		} else {
			alert("Sorry, try again!");
		}
	}

}
function checkScore(){
	let x = cardsInPlay.length;
	let score = 0;
	if (x%2 === 0 && x > 0) {
		for (let i = 0; i<x; i+=2) {
			if (cardsInPlay[i] === cardsInPlay[i+1]) {
				score++;
			}
		}
		alert("Your score is " + score);
	}	
}


function flipCard() {
	const cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	checkScore();
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
	const cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();
function remove() {
	const reCard = document.getElementById('game-board');
	while (reCard.firstChild){
		reCard.removeChild(reCard.lastChild);
	}
	cardsInPlay.splice(0,cardsInPlay.length);
	createBoard();
}
function reset() {
	document.getElementById('game').addEventListener('click', remove);

}
reset();






