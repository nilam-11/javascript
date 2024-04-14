const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter);

const chai = {
    name: "Ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai)); //undefined
// property ka discripter chahiye but chai toh object h, property toh name, price,etc.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
}
}