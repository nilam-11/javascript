const user = {
    username : "Nilam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this); //this is for context
    }

}

user.welcomeMessage()
user.username = "Ram"
user.welcomeMessage()

console.log(this); //{}


function chai() {
    let username = "Nilam"
    console.log(this.username);  //undefined
}

chai()


const chai = function () {
    let username = "nilam"
    console.log(this.username); //undefined 
}

chai()

// arrow function
const chai = () => {
    let username = "nilam"
    console.log(this.username); //undefined 
    console.log(this); //{}
}

//Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //when using parenthesis then no return used
//for curly braces use return statement

console.log(addTwo(3,4));  //7

//return object
const addTwo = (num1, num2) => ({username: "Nilam"}) 
 
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
