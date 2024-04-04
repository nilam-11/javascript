// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// a promise is in one these states 
// 1. pending : initial state, neither fulfilled nor rejected.a
// 2. fullfilled: meaning that the operation was completed successfully
// 3. rejected: meaning that the operation failed.

//create promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

// consume promise
promiseOne.then(function(){
    console.log("Promise consume");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user); //resolve me jo bhi parameter pass hota hai wo yha mil jata hai
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "Nilam", password: "123"})
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "JAVASCRIPT", password: "123"})
        } else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})

//gracefilly catch handle nhi krta h 
// but kuchh cases me use hoga agr DB connection nhi hua toh age badhhna hi nahi hai
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//try and catch used 

// async function getAllUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response); //ye chal rha hai
//         const data = await response.json() //pehle string tha usko json bna diye
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

/*
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). 
Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/

/*
fetch ka central mechanism kaam krne ka 2 parts me divide hota hai 
ek part browser nhi toh node ki APIs ko handle krne k liye jata h 
or ek part variables and memory me data space reserve krne k bhagta h

pehla wala jata h or memory me ek space reserve krta h (say) data
yha 2 arrays hota h 1. onFulfilled[] -> promise ka resolve
                    2. onRejection[] -> rejection
ye arrays or data private field hota h inme data add krna ya access krna humlog ka range me nahi

dusra jo hota h web browser API access krega ya node API handle krega 
yha se network request jata h (network request directly nahi send kr skte hain kuchh resource chahiye hota hai(browser ya node))
network request mil gya toh ya toh jayega ya nahi jayega 
jaake agr response aya toh wo jata h onFulfilled me 
agr request nhi jaa payi ya error aya tb wo rejection me jayega 

data memory me reserved rehta hai, data ki value initially hoti h empty ya undefined
toh jb kaam hojayega network request se tb net req se koi ek fire hoga 

dono arrays me hota h function jo responsible hota h data ko fulfill krne me 
data ka value fulfill hogya toh hmlog variable banaye the response wo global memory me available hai 
wo data phir us response ko fulfill krega 
*/
