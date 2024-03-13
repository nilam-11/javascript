const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

const myTotal = myNums.reduce( (acc, currval) => acc+currval,0)
console.log(myTotal); //6

const shoppingCart = [
    {
        itemName:"js cource",
        price: 2999
    },
    {
        itemName:"web dev",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 3999
    },
    {
        itemName:"cppcourse",
        price: 12999
    }
]

const priceTotal = shoppingCart.reduce( (acc, item) => acc+item.price,0)
console.log(priceTotal); //25996