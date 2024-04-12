function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUserName(username) -> call hua h but uska execution context call stack se chla gya toh variables bhi chale gye

    setUserName.call(this, username) //refenrence hold ho rha h 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "abc@gmail.com", 123)
console.log(chai);