const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    return item;
})

console.log(values); //undefined
//for Each values return nhi krta


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num>4)
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num) => {
    return num>4
})
console.log(newNums2); //[ 5, 6, 7, 8, 9, 10 ]

const nums = []

//using for each
nums.forEach( (num) => {
    if(num>4){
        nums.push(num)
    }
})
console.log(nums);

