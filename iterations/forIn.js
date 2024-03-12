const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby,',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}

/*
js
cpp
rb
swift
*/

for (const key in myObject) {
    console.log(myObject[key]);
}
/*
javascript
C++
Ruby,
swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}
/*
0
1
2
3
4
*/

for (const key in programming) {
    console.log(programming[key]);
}
/*
js
rb
py
java
cpp
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in object) {
    console.log(key);
}
//not iterable 