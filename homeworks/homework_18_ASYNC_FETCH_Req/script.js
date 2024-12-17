const gridCharacters = document.querySelector ("#characters-container")

async function fetchCharacter() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    data.results.map(character=>{
        const card = document.createElement("div")
        card.className = "character-card"
//--------- Character Img ---------
     const img = document.createElement("img")
     img.src = character.image
     img.alt = character.name
     card.append(img)
//--------- Add Name ---------
     const name = document.createElement("h2")
     name.textContent = character.name
     card.append(name)
//--------- Add Status ---------
     const status = document.createElement("p")
     status.textContent = `Status: ${character.status}`
     card.append(status)
//--------- Add Origin name ---------
     const originName = document.createElement("p")
     originName.textContent = `Origin name: ${character.origin.name}`
     card.append(originName)

     gridCharacters.append(card)

    })
}
fetchCharacter()