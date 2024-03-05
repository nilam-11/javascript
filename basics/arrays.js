//Arrays object enables storing a collection of multiple items under a single variable

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Saktiman", "Nagraj"]

const myArr2 = new Array(1, 2, 3, 4)


// Array Methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr); // adds in first and shifts other
 
myArr.shift()
console.log(myArr); //removes first element i.e. 9

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1


const newArr = myArr.join()
console.log(myArr); //Array 
console.log(newArr); //String type

//slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4 ]
const myn1 = myArr.slice(1, 3) 

console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);  // B  [ 0, 1, 2, 3, 4 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 1, 2, 3 ] 
console.log("C ", myArr); // C  [ 0, 4 ]

// In Slice last index is not included and original array remains same
// In Splice last index is included and original array is changed, splice indices are removed


// ************************************************

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // [ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

const allArr = marvel_heros.concat(dc_heros) // returns new array
console.log(allArr); // [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const all_new_arrays = [...marvel_heros, ...dc_heros]
console.log(all_new_arrays);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("Nilam")); //false
console.log(Array.from("Nilam")); ['N', 'i', 'l', 'a', 'm']

console.log(Array.from({name: "Nilam"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100, 200, 300]

