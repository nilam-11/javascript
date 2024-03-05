//String interpolation

const name = "Nilam"
const age = 18
console.log(`Hello my name is ${name} and my age is ${age}`)

//declaration
const gameName = new String('Nilam-11')

console.log(gameName[0]); //0th key accessed
console.log(gameName.__proto__); //object

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); //can't use negative values
console.log(newString); //Nila

const anotherString = gameName.slice(-6, 4)
console.log(anotherString); //la

const newStringOne = "       Nilam       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nilam.com/nilam%20kumari"
console.log(url.replace('%20', '-')); 
console.log(url.includes) // true

console.log(gameName.split('-')); //splits on -


