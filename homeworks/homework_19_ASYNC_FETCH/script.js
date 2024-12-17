const gridProducts = document.querySelector ("#products-container")

async function fetchProduct() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    data.products.map(product=>{
        const card = document.createElement("div")
        card.className = "product-card"
//--------- Item Img ---------   
        const img = document.createElement("img")
        img.src = product.images 
        img.alt = product.title
//--------- Add Img-Wrapper --------- 
        const wrapper = document.createElement("div")
        wrapper.className = "img-wrapper"
        wrapper.append(img)
        card.append(wrapper)
//--------- Add Title ---------
        const title = document.createElement("h2")
        title.textContent = product.title
        card.append(title)    
//--------- Add Description ---------
        const desc = document.createElement("p")
        desc.textContent = product.description
        card.append(desc)
//--------- Add Price ---------
     const price = document.createElement("p")
     price.textContent = `Price:  ${product.price}€`
     card.append(price)





        gridProducts.append(card) 
    
    
    
    
    
    
    
    })
}
fetchProduct()