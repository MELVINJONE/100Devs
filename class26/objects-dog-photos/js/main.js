const BREED_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

document.querySelector('select').addEventListener('click', showDog)

function showDog() {
    fetch(BREED_URL)
        .then(res => {
            return res.json()
        })
        .then(data => { //Grab the data
            const breedsObject = data.message //Turn the message from data into an object
            // console.log(breedsObject); It just serves to see it on the console (what the keys are)
            const breedsArray = Object.keys(breedsObject) //Turn the object into an array
            // console.log(breedsArray);
            for (let i = 0; i < breedsArray.length; i++) {
                const option = document.createElement('option')//Create an element in the HTML file called option so <option></option>. But it still doesn't display anything.
                option.value = breedsArray[i]//Is adding a value to each option so <option value='breed'></option>
                option.innerText = breedsArray[i] //Add the text inside the option element
                select.appendChild(option) //Find the selector with class of .breeds (look at 2nd line on top) and append each option to be used with the selected tag(the dropdown box). 
            }

        })
}