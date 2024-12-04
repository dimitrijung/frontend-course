const magicBtn = document.querySelector("#magic-btn")

magicBtn.addEventListener("click", ()=>{
    const magicBtn2 = document.createElement("button")
    magicBtn2.textContent = "Я изменю тебя"
    magicBtn2.id = "magic-btn-2"
    document.body.append (magicBtn2)

magicBtn2.addEventListener("click", ()=>{
    magicBtn.style.backgroundColor = "#9c4a1a"
    magicBtn.style.color = "black"

})
})