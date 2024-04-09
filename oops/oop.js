const user = {
    username : "Nilam",
    logInCOunt : 4,
    signedIn : true,

    getUserDetails: function() {
        // console.log("Got user detail");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails);
console.log(this); //{}
//browser me bahut chijen dega but yha empty

// const promiseOne = new Promise()
// const date = new Date()

// //new here is a constructor function -> allows to create multiple(new) instances from one object literals

function User(username, loginCount, isLoggedIn) {
    this.username = username //left side is variable right side is passed value 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("Nilam", 12, true)
// const userTwo = User("JAvascript", 10, false)
// console.log(userOne); //JAvascript 10 false (new use nhi kiye -> overwrite)

const userOne = new User("Nilam", 12, true)
const userTwo = new User("JAvascript", 10, false)
console.log(userOne); // Nilam 12 true
console.log(userOne.constructor); //[Function: USer]
//constructor property is a reference to itself

//whenever new keyword is used first of all an empty object is created which is called instance  
//Step 2 -> a constructor function is called due to new keyword 
// this constructor function packs all the arguments etc. and gives i to you
// Step 3 -> the this keyword injects all the arguments etc.
//Step 4 -> we get it in the function

// instanceof -> The instanceof operator tests to see if the prototype property of a constructor
//  appears anywhere in the prototype chain of an object. The return value is a boolean value