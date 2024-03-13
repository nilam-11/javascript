const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map( (nums) => nums+10) //when use scope here we need to write return 
// console.log(newNum);
/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/

// Chaining

const newNum = myNum
        .map( (num) => num*10)
        .map( (num) => num+1)
        .filter( (num) => num>=40)  //jo true h wahi return hoga
console.log(newNum);
/* [
  41, 51,  61, 71,
  81, 91, 101
] */
