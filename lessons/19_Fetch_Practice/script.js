//fetch("https://fakestoreapi.com/products")
//.then(res=> res.json())
//.then(data=> {
//data.map(product =>{
//    const item = document.createElement ("p")
//    item.textContent = product.title
//    document.body.append(item)
//})   
//})

//----------------------------------------------------------------

const gridProducts = document.querySelector ("#grid-products")

async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    data.map(product=>{
// Sozdaem karto4ku s dannimi
const card = document.createElement("div")
card.className = "product-card"
// Sozdaem zagolovok
const heading = document.createElement("h4")
heading.textContent = product.title
card.append(heading)
// Dobawljaem kartinku
const img = document.createElement("img")
img.src = product.image
img.alt = product.title
// sozdaem obertku dla kartinki
const wrapper = document.createElement("div")
wrapper.className = "img-wrapper"
wrapper.append(img)
card.append(wrapper)
// Sozdaem opisanie towara
const desc = document.createElement("p")
desc.textContent = product.description
//obresaem dlinnij text
let descText = product.description
if (descText.length > 200) {
    desc.textContent = descText.slice (0, 200) + "..."
}else{
    desc.textContent = product.description
}
card.append(desc)
// Dobawljaem zenu
const price = document.createElement("p")
price.textContent = `Price: ${product.price}`
//price.textContent = product.price
card.append(price)
//
gridProducts.append(card) 


console.log(card);

    })
}
fetchProducts()


fetch("https://fakestoreapi.com/products?limit=5")
.then(res => res.json())
.then (data => {
    console.log(data); 
})

