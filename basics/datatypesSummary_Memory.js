// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const num = 18
const isSignedIn = true

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  //false

const bigNumber = 12345n  // n for bigInt

//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["naagraj", "doga"];
let myObj = {
    name: "Nilam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");
}

// *******************************************

//Stack (Primitive), Heap (Non Primitive)
//Stack memory provides copy a variable
// Heap memory provides refrence, value changes in original

let myName = "Nilam"
let anotherName = myName
anotherName = "Nidhi"
console.log(myName); //Nilam
console.log(anotherName); //NIdhi -> changes a copy of myName

let userOne = {
    email: "user@gmail.com",
    upi: "user@123"
}

let userTwo = userOne 

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
//same o/p in both as refrence in heap is changed


