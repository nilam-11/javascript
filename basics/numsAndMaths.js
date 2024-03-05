const balance = new Number(100)
console.log(balance); //prototype->number primitive value->100
// [Number: 100]

console.log(balance.toString());  //string -> 100
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const num = 23.7867
console.log(num.toPrecision(3)) //returns string -> 23.8

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// +++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2)); //5
console.log(Math.round(4.8)); //4
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 8, 6)); //8

console.log(Math.random()); //0<= value <= 1
console.log(Math.random()*10 + 1); //1<= value <10
console.log(Math.floor(Math.random() * 10) + 1); //abs value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //value between 10 and 20x

