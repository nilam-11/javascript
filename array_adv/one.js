const myArr = []
// %DebugPrint(myArr)

// continuos(packed), holey 

// Optimization of arrays -> SMI (small integer)
// Packed element
// Double (float, string, function)

// optimization hr chij pe dpnd krta h (string, function k liye alg ; continuous holey k liye alg)

//Array k andr elements hote hain

const arrTwo = [1, 2, 3, 4, 5] //sirf numbers le sakte hain(decimal bhi nahi)
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('abc')
// PACKED_ELEMENTS

//Ek baar downgrade hua toh uske baad upgrade nahi ho sakta 
// (ek baar double bna phir elements delete krke wps SMI nhi bnega )

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]); 

// bound check (out of bound me direct result de dega)
// hasOwnProperty(arrTwo, 9) (uski koi property hai ya nahi -> 9th position pe koi hai ya nahi)
// hasOwnProperty(arrTwo.prototype, 10) (prototype me koi value h ya nhi)
// hasOwnProperty(Object.prototype, 10) (Object me kuchh inject kiya waha se lena hai) //prototypal nature hai

// holes are very expensive in js(hasOwnProperty expensive check hai)

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]); //3 (2 steps)

// Optimised -> SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

//Optimisation
const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN) //PACKED_DOUBLE
arrSix.push(Infinity) //PACKED_DOUBLE
// ab ye kbhi SMI nhi bnega

//internal methods ko jyada use kijiye for optimisation
// for, for-of, forEach