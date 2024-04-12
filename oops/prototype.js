let myName = "Nilam        "

console.log(myName.length); //13

// console.log(myName.trueLength);

/*
    function-------------
                        |
                        v
    Array ----------> Object -------> null
                        ^
                        |
    String--------------

*/


let myHeroes = ["thor", "spiderMan"]

let heroPower = {
    thor : "hammer",
    spiderMan : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderMan}`);
    }
}

Object.prototype.nilam = function(){
    console.log(`nilam is present in all objects`);
}

Array.prototype.heyNilam = function(){
    console.log(`Nilam says Hello`);
}

heroPower.nilam()

myHeroes.nilam() //array
myHeroes.heyNilam()
// heroPower.heyNilam() //error
// here array is given the prototype so all objects have no access 


//inheritence

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignments : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //Teacher ki property TeachingSupport access kr rha


let anotherUSerName = "ChaiAurJS        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUSerName.trueLength()
"Nilam".trueLength()
"Doodh".trueLength()