// Immediately Invoked Function Expression (IIFE)

(function chai() {  //NAMED IIFE
    console.log("DB connected");
})(); // this knows when it is envoked but not knows when to stop -> put semicolon
// DB connected 
//first parenthesis is function defination
//second () is for execution

//IIFE -> function executes immediately
// sometimes there's a problem due to pollution of global scope, so we use iife for removing that pollution due to the variables

//arrow function
((name) => { 
    console.log(`DB connected two ${name}`);
})(`Nilam`)
