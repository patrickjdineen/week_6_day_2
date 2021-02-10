//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))
console.log(Object.values(person3))
if(Array.isArray(Object.keys(person3.shakes))){
    console.log(Object.values(person3.shakes))
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;   
    this.age = age

// Use an arrow to create the printInfo method
    this.printInfo = () => `${this.name} is ${this.age} years old`;
    // Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.anotherYear = () => this.age+=1
}
let patrick = new Person('Patrick',34)

console.log(patrick.printInfo())
patrick.anotherYear()
console.log(patrick.printInfo())
patrick.anotherYear()
console.log(patrick.printInfo())
patrick.anotherYear()
console.log(patrick.printInfo())

let felicity = new Person('Felicity',34)
console.log(felicity.printInfo())
felicity.anotherYear()
console.log(felicity.printInfo())
felicity.anotherYear()
console.log(felicity.printInfo())
felicity.anotherYear()
console.log(felicity.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterTen = num => {
    return new Promise( (resolve, reject) =>{
       if (num > 10){
           resolve('Big Word')
       } else {
            reject('Small Number')
       }
    })
}
greaterTen(12)
.then((resolve) => {
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject)
})