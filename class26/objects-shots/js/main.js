// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let forward = document.querySelector('.forward');
let back = document.querySelector('.back');

[forward, back].map(element =>element.addEventListener('click', getDrink))

// document.querySelector('.forward').addEventListener('click', getDrink)

function getDrink(){
//   const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
            document.querySelector('#ing1').innerText = `${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1}`
            document.querySelector('#ing2').innerText = `${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}`
            document.querySelector('#ing3').innerText = `${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}`
            document.querySelector('#ing4').innerText = `${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}`
            document.querySelector('#ing5').innerText = `${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}