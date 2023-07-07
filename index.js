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

const person = {
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
console.log(person)