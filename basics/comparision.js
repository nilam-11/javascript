console.log("2" > 1) //true
console.log("01" > 1) //false


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
equality check == and comparisions > > <= >= works differently
comparision converts null to a number, treating it as 0
thats why null>=0 is true and null>0 is false   
*/
 
console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined >= 0);  //false

//=== -> strict check 
//checks the datatypes with the values

console.log("2" === 2);  //false -> string and number 