/* const myCity = {
    city: 'New York'
}

myCity['popular'] = true

console.log(myCity)

const countryPropertyName = 'country'
myCity [countryPropertyName] = 'USA'

console.log(myCity) */

/* const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']

console.log(myCity) */

/* const name = 'Kirill'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile) */

/* const myCity ={
    city: 'New York',
    cityGreeting () {
        console.log('Greetings!!!')
    }
}

myCity.cityGreeting() */


// Мутации объектов
/* const person = {
    name: 'Bob',
    age: 21
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age) //22
console.log(person.isAdult) //true */

// Как избежать мутаций 1

/* const person = {
    name: 'Bob',
    age: 21
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2)
console.log(person) */

// Как избежать мутаций 2

/* const person = {
    name: 'Bob',
    age: 21
}

const person2 = {...person}

person2.name = 'Kirill'

console.log(person2)
console.log(person) */

// Как избежать мутаций 3

/* const person = {
    name: 'Bob',
    age: 21,
    infoMan: {
        isPopular: true,
        country: 'USA'
    } 
}

const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Kirill'

console.log(person2)
console.log(person) */

/* let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 8
b = 12

sum(a, b)

a = 44
b = 56

sum(a, b) */

/* const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge (person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge (personOne)
console.log (personOne)
console.log (updatedPersonOne) */

/* const button = {
    width: 200,
    text: 'Buy',
    color: 'green'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton) */

/* const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button) */

//Шаблонные строки

/* const nameMe = 'Kirill'
const myTown = 'Stavropol'

const meInfo = `${'Меня зовут:'} ${nameMe} ${'Я живу в городе:'} ${myTown}`

console.log (meInfo) */

// Стрелочная функция
/* setTimeout(() => {
    console.log('Отложенное сообщение')
}, 1000) */


// try/catch отслеживание ошибок

/* const fnWithError = () => {
    throw new Error ('Some error')
}
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}


console.log ('Continue...') */


// Работа с массивами


/* const myMass = [1, true, 'Kirill']

console.log (myMass)

console.log (myMass[0])
console.log (myMass[1])

console.log (myMass.length) */

/* const myArray = [1, 2, 3, 4]
console.log (myArray)

myArray[2] = 'Kirill'
console.log (myArray)

myArray[4] = false
console.log (myArray)
console.log (myArray.length) */

//Метод push - добавить элемент в конце массива
//myArray.push(4) //добавить число 4 к массиву

//Метод pop - удалить последний элемент в массиве
//myArray.pop() - удалить последний элемент массива const myArray = [1, 2, 3]
//const removedElement = myArray.pop() - вернуть удаленный элемент

//Метод unshift - добавить элемент в начало массива
//myArray.unshift(true)

//Метод shift - удаляет первый элемент массива
//myArray.shift()
//const removedElement = myArray.shift() - вернуть удаленный элемент

//Метод forEach - перебор элементов массива. Для каждого элемента массива будет вызываться callback функция(например). Не меняет массив.
/* const myArray = [1, 2, 3]
console.log(myArray)
myArray.forEach(el => console.log(el*2))
console.log(myArray) */

//Метод map - перебирает элементы массива и формирует его заново, исходя из результатов callback функции. Присвоить константу для возврата новых значений массива
/* const myArray = [1, 2, 3]
console.log(myArray)
const newArray = myArray.map(el => el*3)
console.log(newArray)
console.log(myArray) */

//явное возвращение значения
/* const myArray = [1, 2, 3]
console.log(myArray)
const newArray = myArray.map((el) =>  {
    return el*3
})
console.log(newArray)
console.log(myArray) */

// Деструктуризация объектов/массивов/функций

/* const userProfile = {
    name: 'Kirill',
    comentsQty: 23,
    hasSignedAgreement: false
}

const {name, comentsQty} = userProfile
const {hasSignedAgreement} = userProfile

console.log (name)
console.log (comentsQty) */

/* const fruits = ['Apple', 'Orange']
const [fruitZero, fruitOne] = fruits

console.log (fruitZero)
console.log (fruitOne) */

/* const userProfile = {
    name: 'Kirill',
    commentsQty: 23,
    hasSignedAgreement: false
}

const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile) */

//Условные инструкции

/* const age = 17

if (age >= 18) {
    console.log('Is adult')
} 

if (age >=12 && age < 18) {
    console.log('Is teenager')
} 

if (age < 12) {
    console.log('Is child')
} */

//if в функциях

/*const sumPositiveNumbers = (a, b) => {
if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the numbers is not a number'
}

if (a <= 0 || b <= 0) {
    return 'Numbers are not positive'
}

    return a + b
}  */

//Инструкция switch

/* const month = 3

switch (month) {
    case 3:
        console.log('Март')
        break
    case 4:
        console.log('Апрель')
        break
    case 5:
        console.log('Май')
        break
    default:
        console.log('Это не весна')
} */

//Тернарные операторы

/* perem = -99

const result = perem <=-100 ? perem : -perem
console.log(result) */

//Циклы for/ for in/ while/ do while/ for of

/* for (let a = 7; a > 1; a--) {
    console.log(a)
} */

/* const myMass = ['Одын', 'Двыа', 'Тры']

myMass.forEach((Element, index) => {
    console.log(Element, index)
}) */

/* let a = 10

while (a > 1) {
    console.log(a)
    a = (a - 2)
} */

/* let b = 4

do {
    console.log(b)
    b--
} while (b > 5); */

/* const myExample = {
    a: 10,
    b: false,
    c: 'dsd',
}

for (const key in myExample) {
    console.log(key, myExample[key])
} */

/* const myNum = '65673'

for (const letter of myNum) {
    console.log(letter)
} */

//Классы и прототипы - пока неясно как рабоать и как применять

/* class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty +=1
    }
}

const firstComment = new Comment ('First comment')

firstComment.upvote()
console.log(firstComment.votesQty)

firstComment.upvote()
console.log(firstComment.votesQty) */

/* class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray (5, 10, 20)

console.log(myArray)
myArray.sum() */

/* const array = [5, 123, 556, 78, 3];
const res = array.reduce((acc, rec) => acc + rec);

console.log(res); */

//Promises

/* const getData = (url) =>
    new Promise ((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/5')
    .then(data => console.log(data))
    .catch(error => console.log(error.message)) */

/* const asyncFn = async () => {
    throw new Error('Ааа всё поломалося!')
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message)) */

/* const timerPromise = () =>
    new Promise ((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn() */

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/55'

try{
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}