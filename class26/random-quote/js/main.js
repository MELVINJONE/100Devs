


// document.addEventListener("DOMContentLoaded", () => {
//     // DOM elements
//     const button = document.querySelector("button");
//     const quote = document.querySelector("blockquote p");
//     const cite = document.querySelector("blockquote cite");
//     let tag = document.querySelector('input').value;


//     async function updateQuote() {
//         // Fetch a random quote from the Quotable API
//         const response = await fetch(`https://api.quotable.io/random`);
//         console.log(tag);
//         const data = await response.json();
//         if (response.ok) {
//             // Update DOM elements
//             quote.textContent = data.content;
//             cite.textContent = data.author;
//         } else {
//             quote.textContent = "An error occured";
//             console.log(data);
//         }
//     }

//     // Attach an event listener to the `button`
//     button.addEventListener("click", updateQuote);

//     // call updateQuote once when page loads
//     updateQuote();
// });

document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
    let tag = document.querySelector('input').value

    fetch(`https://quotable.io/quotes?tags=${tag}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0]);
            document.querySelector('.blockquote').innerHTML = data.results[0].content
            document.getElementById('blockquote-footer').innerHTML = data.results[0].author
            // console.log(data.drinks[0])
            // document.querySelector('h2').innerText = data.drinks[0].strDrink
            // document.querySelector('img').src = data.drinks[0].strDrinkThumb
            // document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
            // document.querySelector('#ing1').innerText = data.drinks[0].strMeasure1 + ' ' + data.drinks[0].strIngredient1
            // document.querySelector('#ing2').innerText = `${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}`
            // document.querySelector('#ing3').innerText = `${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}`
            // document.querySelector('#ing4').innerText = `${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}`
            // document.querySelector('#ing5').innerText = `${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}`
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
