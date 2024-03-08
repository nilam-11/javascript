let a = 300;
if(true){
    let a = 30;
    const b = 20
    var c = 30
    console.log("Inner", a);  //30
}

console.log(a); //300
console.log(b); //Error
console.log(c); // 30 -> thats why var is avoided

//Nested Scope

function one() {
    const username = "Nilam"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); -> Error - out of scope

    two() //Nilam
}

one()

if(true) {
    const username = "Nilam"
    if(username === "Nilam") {
        const website = " Youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


addOne(5) //5 -> even called before declaration of function 
function addOne (num) {
    return num + 1;
}

// addTwo(5) -> Error as we have hold in variable (hosting)
const addTwo = function(num) {
    return num + 2
} 