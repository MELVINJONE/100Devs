

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
        .then(data => {
            console.log(data)
            if (data.status === 1) {
                //call additional stuff if product is found
                const item = new ProductInfo(data.product)
            } else if (data.status === 0) {
                alert(`Product ${inputVal} not found. Please try another one.`)
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

class ProductInfo {
    constructor(productData) {//I am passing in data.product
        this.name = productData.product_name
        this.ingredients = productData.ingredients
        this.label = productData.labels
        this.image = productData.image_url
    }

    testCall() {
        console.log(this.ingredients);
    }
}