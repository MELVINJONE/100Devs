let deckID ='' //It's a global variable

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID = data.deck_id
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo() {
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=Dt6kUnBI1ut2wbrnjGHzI42YPguPd3bkQ1eI3YGQ&date=${choice}`
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
  
}

