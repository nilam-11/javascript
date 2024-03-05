let age = "18abc"

console.log(typeof(age)) // string

let valueInNumber = Number(age)

console.log(typeof valueInNumber) // number -> which is not actually number
console.log(valueInNumber) //NaN (not a number)

// "18" => 18
// "18abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "hitesh" => true

let num = 33

let stringNumber = String(num)
console.log(stringNumber) // 33
console.log(typeof stringNumber) //string


//*********** Operations ***************

let value = 3
let negValue = -value
console.log(negValue)  //-3

// console.log(2+2) //sum
// console.log(2-1);  //sub
// console.log(2*2); //multiplication
// console.log(2**2); //power
// console.log(2/3); //divide
// console.log(2%2); //remainder

let str1 = "hello"
let str2 = " Nilam"

let str3 = str1 + str2
console.log(str3);  //"hello Nilam"

console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
// console.log(true+); -> Error
console.log(+"") //0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let counter = 100
counter++ //post increament
++counter //pre increament
console.log(counter); //101







