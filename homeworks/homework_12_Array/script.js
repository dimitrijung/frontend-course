

//-------------------------- ЗАДАНИЕ 1 --------------------------

// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". 
// Создайте массив с возрастами: 22, 31, 45, 53. 
// Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

let names = ["Мария", "Алексей", "Елена", "Дмитрий"]
//console.log(names);

let ages = [22, 31, 45, 53]
//console.log(ages);


// Создайте новый массив, заполнив его элементами в формате "имя возраст лет/год/года".
// Для того чтобы поставить правильное окончание лет/года/годов мы используем "if->else" ==> if 22 -> года.
function ageEnding(ages) {
if (ages == 22 || ages == 53) {
        return "года"    
    }else if (ages == 31) {
        return "год"
    }else {
        return "лет"
    }
}

// Создайте новый массив, заполнив его элементами в формате "имя возраст лет/год/года".
let people = []                             // Создали новый массив куда мы положим наш результат 
for (let i = 0; i < names.length; i++) {    // цикл проходит по всем элементам массивов  0, 1, 2, 3 и обьединяет имя и возраст
    let name = names[i]
    let age = ages[i]
    let ending = ageEnding(age) 

    people.push(`${name} ${age} ${ending}`) // создаем строку с помощью шаблона "${names} ${ages} ${ending}" например на первом проходе получится " Мария 22 года". С помощью метода push добавляем эту строку в созданый массив people   
    }
console.log(people);


// второй вариант без функции "function ageEnding(ages)" правильного окончания "лет/годов" и без дополнительных переменных let name = names[i]/ let age = ages[i]
//let people = []
//for (let i = 0; i < names.length; i++) {
//    people.push (`${names[i]} ${ages[i]} лет/годов`) //конкатинация  
//}
//console.log(people);

//-------------------------- ЗАДАНИЕ 2 --------------------------

// Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
let reversedPeople = people.reverse()
console.log(reversedPeople);


//-------------------------- ЗАДАНИЕ 3 --------------------------

// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". 
// Удалите последний элемент из массива и сохраните значение в переменной. 
// Добавьте его в начало массива. Выведите countries в консоль.

let countries = []                                  // Создайте пустой массив countries.
countries.push ("Франция", "Германия", "Италия")    // Добавьте в массив следующие страны: "Франция", "Германия", "Италия".
console.log(countries);

let lastCountry = countries.pop()                   // Удалите последний элемент из массива и сохраните значение в переменной.
console.log(lastCountry);

countries.unshift(lastCountry)                      // Добавьте его в начало массива.
console.log(countries);                             // Выведите countries в консоль.


//-------------------------- ЗАДАНИЕ 4 --------------------------

// Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:

// Умножьте каждый элемент на 2 и выведите результат в консоль.
// Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
// Выведите оба массива (исходный и новый) в консоль.


// Умножьте каждый элемент на 2 и выведите результат в консоль.
let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
     let result = numbers[i] * 2;
     console.log(result);       
}

// Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
let numbers2 = []

for (let i = 0; i < numbers.length; i++) {
    numbers2.push (Math.pow (numbers[i], 2))
}

// Выведите оба массива (исходный и новый) в консоль.
console.log(numbers);
console.log(numbers2);
