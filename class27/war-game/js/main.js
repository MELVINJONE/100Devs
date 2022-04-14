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
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image
    let player1Val = Number(data.cards[0].value)
    let player2Val = Number(data.cards[1].value)
    if(player1Val > player2Val){
      document.querySelector('h3').innerText = ' Player 1 wins'
    }else if(player1Val < player2Val){
      document.querySelector('h3').innerText = ' Player 2 wins'
    }else{
      document.querySelector('h3').innerText = 'No one wins. Time for WAR'
    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  });
  
}

function convertVal (val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }
}

