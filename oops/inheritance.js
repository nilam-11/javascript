class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USername is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const Chai = new Teacher("chai", "chai@gmail.com", "123" )

Chai.addCourse()

const masalaChai = new User("masalaChai")
// masalaChai.addCourse() //no access

masalaChai.logMe()

console.log(Chai instanceof Teacher); //true
console.log(Chai instanceof User); //true