const player1 = 'player1';
const player2 = 'player2';

// call to get a new shuffled deck
let deckPromise = fetch(
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

function getCards(deckId, cardCount) {
  return fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
  ).then((response) => response.json());
}

deckPromise.then((deck) => {
  getCards(deck.deck_id, 2).then((data) => printCards(data.cards, player1));
  getCards(deck.deck_id, 2).then((data) => printCards(data.cards, player2));
});

function printCards(cards, playerId) {
  cards.forEach((card) => {
    let cardHtml = `
              <div>
                  <img src="${card.image}">
              </div>
          `;
    document.getElementById(`${playerId}-cards`).innerHTML += cardHtml;
  });
}

function hitMe(playerId) {
  deckPromise.then((deck) => {
    getCards(deck.deck_id, 1).then((data) => {
      printCards(data.cards, playerId);
    });
  });
}
