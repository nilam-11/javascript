function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("A");
    console.log("M");
}


//sayMyName -> reference
//sayMyName() -> execute

sayMyName()

// function addTwoNum(number1, number2){  //parameters
//     console.log(number1 + number2);  //9
// }
//console.log("Result:", result); //undefined

function addTwoNum(number1, number2){
    // let result = number1 + number2
    // return result;

    return number1+number2
}

const result = addTwoNum(5, 4)    //arguments
console.log("Result:", result); //9 


// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Nilam"));
// console.log(loginUserMessage()); //undefined

function loginUserMessage(userName){  //or can give default value userName = "Ram"

    if(userName === undefined){ //(!userName)
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}
    
//multiple input value
function calcCartPrice(...num1){ //rest operator
    return num1
}

console.log(calcCartPrice(200, 300, 500)); //Array

function calcCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}

console.log(calcCartPrice(200, 300, 500, 1000)); //[500, 1000]
//val1=200 val2=300

const user = {
    username: "Nilam",
    price: 499
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) // Username is Nilam and price is 499
//if any value is not proper it will print undefined

// direct object can also be passed

const myNewArray = [200, 400 ,100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(myNewArray); //400
//direct arrays can also be passed


