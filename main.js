var showCards = document.getElementById("cards");

console.log("is anything happening/");

showCards.onclick = function() {
  var cardContainer = document.getElementById("container");
  cardContainer.innerHTML = "";
  displayCards();
};

function shuffleDeck(cardDeck){
  var shuffleDeck = [];
  for ( var key in cardDeck) {
    //while the value has not been added into the array, keep generating a random number and attempt to input into array
    while( shuffleDeck.indexOf(cardDeck[key]) === -1) {
      var place =Math.floor(Math.random() * ( 52 - 0 ));
      if (shuffleDeck[place] === undefined) {
        shuffleDeck[place] = cardDeck[key];
      }
    }
  }
  return shuffleDeck;
}

function displayCards() {
  var deck = newDeck();
  var shuffleCards = shuffleDeck(deck);

  for ( var i = 0; i < deck.length; i++ ){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById("container");
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffleCards[i].suit + "-" + shuffleCards[i].card + ".png" + ")"
  }
};

function isUsed() {
  var used = true;
  while (used === true){

  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  suits.forEach(addRanks);

  function addRanks(currSuit){
    for (var key in ranks) {
      var currCard = {};
      currCard.card = ranks[key].card;
      currCard.suit = currSuit;
      deck.push(currCard);
    }
    console.log(deck);
  }
  return deck;
}
