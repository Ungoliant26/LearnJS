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

const nameMe = 'Kirill'
const myTown = 'Stavropol'

const meInfo = `${'Меня зовут:'} ${nameMe} ${'Я живу в городе:'} ${myTown}`

console.log (meInfo)