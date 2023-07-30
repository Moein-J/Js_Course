// variables types
let number = 1;
let string = 'string'
let bool = true
let person = {
    name: 'ali',
    age: 20
}
let array = [1, 2, 3, 'apple']

// let , var , const
// difference between var & let
{
    let personName = "reza"
    console.log(personName)
}

{
    var personName2 = "reza"
}
console.log(personName2)

var carName
carName = 'benz'
var carName = 2

let color
color = 'red'
color = 'blue'
console.log(color)

// const
const age = 18
console.log(age)

// objects
const personInformation = {
    name: 'ali',
    age: 20,
    id: 2241
}
personInformation.id = 24
console.log(personInformation.id)

// array
const list = [{ name: 'ahmad', age: 23 }, { name: 'sara', age: 22 }]
console.log(list[1])

// functions
function myFunc(name, lastName) {
    console.log(`${name} ${lastName}`)
}
myFunc('ali', 'mohseni')

// const myFunc = ()=>{

// }

// Es6 : rest - spread - destructuring

// array
let numbers = [12, 2, 3, 4]
let [first, , third] = numbers
console.log(third)

// object 
const newPerson = {
    Pname: 'nazanin',
    Page: 12,
    PlastName: 'taleghi',
    Pphone: '0922444'
}
const { Pname, Page } = newPerson
console.log(Pname)

// spliter
let objectName = 'console'
const spliter = [...objectName]
console.log(spliter)

// spread
let myArray = [1, 2, 3]
let newMyArray = [...myArray, 4, 5, 6]
console.log(newMyArray)

const carInf = {
    Cname : 'benz',
    model : 's',
    year : 2008
}
const newCarInf = {
    ...carInf , 
    color :'red',
    engine : 'x'
}
console.log(newCarInf)

// rest 
const {Cname , ...others} = newCarInf
console.log(others)
