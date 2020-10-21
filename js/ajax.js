const httpStatusOk = 200;

const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
  if (
    httpRequest.readyState == XMLHttpRequest.DONE &&
    httpRequest.status == httpStatusOk
  ) {
    const deck = JSON.parse(httpRequest.responseText);
    printInfo(deck);
  }
};

httpRequest.open(
  'GET',
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
);

httpRequest.send();

// call to get a new shuffled deck
let deckPromise = fetch(
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

deckPromise.then((data) => printInfo(data));

deckPromise.then((deck) => {
  // call to draw two cards
  fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`)
    .then((response) => response.json())
    .then((data) => printCards(data.cards));
});

function printCards(cards) {
  cards.forEach((card) => {
    let cardHtml = `
            <div>
            <p>Value: ${card.value}</p>
            <p>Suit: ${card.suit}</p>
                <img src="${card.image}">
            </div>
        `;
    document.body.innerHTML += cardHtml;
  });
}

// add deck info to the dom
function printInfo(deck) {
  let html = `
        <h1>Deck Info</h1>
        <p>Deck id: ${deck.deck_id}</p>
        <p>Card remaining: ${deck.remaining}</p>
        <p>Deck is shuffled: ${deck.shuffled}</p>
    `;
  document.body.innerHTML += html;
}
