// for of

const arr = [1, 2, 3, 4, 5]
for (const iterator of arr) {
    console.log(iterator);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps -> map object holds key- value pairs and remembers original insertion order of the keys
//No duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map); 
/* Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/

//Gives array
for (const key of map) {
    console.log(key);
}

// alg alg
for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myObjet = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const [key, value] of myObjet) {
    console.log(key, ':-', value);
}
//myObject is not iterable 


