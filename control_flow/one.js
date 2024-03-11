//if

/*comparision operators
    < , > . >=, <= , != , == , === , !==
*/

if(2 === "2") {
    console.log("executed"); //no output
}

//implicit

const bal = 1000
if(bal > 500) console.log("test"), console.log("test2");
//not to be used bad practice

if(bal < 500) {
    console.log("less than 500");
} else if( bal < 750) {
    console.log("less than 750");
}else{
    console.log("less than 1200");
}

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2==2) {
    console.log("Allowed");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("logged in");
}


