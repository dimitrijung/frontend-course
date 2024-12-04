// сделали тест подключения
// * console.log("hello js!");
// вывели в консоль глобальный объект document в виде html тегов (более читаемый вид html структуры)
// * console.log(document)
// вывели document в виде объекта со всеми вложенными свойствами (более строгий вид html структуры)
// * console.dir(document)

// завели переменную h1 и положили в нее результат поиска через querySelector тега h1 передав аргументом в скобках имя тега
const heading = document.querySelector('h1')
// изменил цвет элемента в оранжевый
heading.style.color = 'orange'
heading.innerText = 'Урок 10: DOM методы'

// document.querySelector('h1').style.color = 'orange'
// document.querySelector('h1').innerText = 'Урок 10: DOM методы'

const btnChange = document.querySelector("#btn-change")

btnChange.addEventListener("click", ()=>{
heading.style.color = "Violet"
heading.innerText = "Урок 10: DOM methods 🎉"
})

const btnCreate = document.querySelector("#btn-create")

btnCreate.addEventListener("click", ()=>{
    let newElement = document.createElement("p")

    newElement.innerText = " I think, I understand this DOM method"
    newElement.style.color = "red"
    document.body.append(newElement)
})
