

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    let inputVal = document.getElementById('barcode').value
    if (inputVal.length !== 12) {
        alert(`Please ensure the barcode is 12 characters`)
        return; //exit the entire function
    }

    const url = `https://world.openfoodfacts.org/api/v0/product/${inputVal}.json`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => { //use JSON data
            console.log(data)
            if (data.status === 1) {  //If product is valid. Status is a specidif property in the object.
                const item = new ProductInfo(data.product)  //call Constructor if product is found and it will build a new product/object with the assigned properties(name, ingredient, label and image)
                // item.testCall()//calling the method to test it
                item.showInfo() //Call the showInfo on the product
            } else if (data.status === 0) { //If the product is not valid don't call anything
                alert(`Product ${inputVal} not found. Please try another one.`)
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

class ProductInfo {
    constructor(productData) {  //I am passing in data.product
        this.name = productData.product_name
        this.ingredients = productData.ingredients
        this.label = productData.labels
        this.image = productData.image_url
    }

    // testCall() {
    //     console.log(this.ingredients);
    // }       -----------> This method is just used to check it the constructor function works and if we can see the ingredients in the console

    showInfo() {
        document.getElementById('product-img').src = this.image
        document.getElementById('product-name').innerText = this.name
    }

    listIngredients() {
        let tableRef = document.getElementById('ingredient-table')

        for (let key in this.ingredients) { //For each ingredient in our list of ingredients
            let newRow = tableRef.insertRow(-1) //new row in our table. To append row at the end of our table use -1, like for an array if we wanna add something at the end of it use -1.
            let newICell = newRow.insertCell(0)
            let newVCell = newRow.insertCell(1)
            let newIText = document.createTextNode(this.ingredients[key].text)   //Pass in some text in the space we specified. Grab each ingredient
            let vegStatus = this.ingredients[key].vegetarian
            let newVText = document.createTextNode(vegStatus)
        }
    }
}