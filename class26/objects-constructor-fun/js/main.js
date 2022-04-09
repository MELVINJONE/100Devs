document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
            document.querySelector('#ing1').innerText = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
            document.querySelector('#ing2').innerText = `${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}`
            document.querySelector('#ing3').innerText = `${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}`
            document.querySelector('#ing4').innerText = `${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}`
            document.querySelector('#ing5').innerText = `${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}`
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
