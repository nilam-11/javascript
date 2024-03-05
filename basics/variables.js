const accountId = 12345  //declared constants
let accEmail = "username@gmail.com"
var accPassword = "abc123"
accCity = "jaipur" 
let accountState; //undefined 

//accountId = 2  -> TypeError: Assignment to constant variable.
accEmail = "abc@gmail.com"
accPassword = "xyz890"
accCity = "Mumbai"

console.log(accountId)
console.table([accountId, accEmail, accPassword, accCity, accountState])

/*
To declare variables we have two ways let and var
Prefer not to use var
because of issue in block scope and functional scope 
*/