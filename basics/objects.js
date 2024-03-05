// declaration of objects is of two types 
//literal and constructor

//singleton -> constructor (one object of this type)
//Object.create



// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nilam",
    "fullName" : "Nilam Kumari",
    [mySym]: "mykey1",  // for symbol use square brackets
    age: 18,
    location: "Delhi",
    email: "user123@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["fullName"]); //cant be accessed by . method-> gives error
console.log(typeof JsUser.mySym); //string
console.log(JsUser[mySym]); 

//change email 
JsUser.email = "userabc@google.com"
// Object.freeze(JsUser)
JsUser.email = "userabc@chatgpt.com"
// console.log(JsUser); // no change

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting()); //undefined
console.log(JsUser.greeting); // [Function (anonymous)]

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);  // this used for properties in object 
    // Hello JS user, Nilam
}

console.log(JsUser.greeting2()); //undefined
console.log(JsUser.greeting2); // [Function (anonymous)]




//singleton

const obj = new Object()
console.log(obj); //{}

obj.id = "123user"
obj.name = "Nilam"
obj.isLoggedIn = false

console.log(obj);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Nilam",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.fullName); // { userfullname: { firstname: 'Nilam', lastname: 'Choudhary' } }
console.log(regularUser.fullName.userfullname.firstname);  // Nilam

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = { obj1, obj2}
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj4 = Object.assign({}, obj1, obj2) //here an empty object is given which stores the result
//it is not compulsory but a good practice, as when not used the values will go to obj1
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//using spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//when value comes from database then we use

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(obj)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(obj)); // [ '123user', 'Nilam', false ]
console.log(Object.entries(obj)); // [ [ 'id', '123user' ], [ 'name', 'Nilam' ], [ 'isLoggedIn', false ] ] 

console.log(obj.hasOwnProperty('isLoggedIn'));  // true