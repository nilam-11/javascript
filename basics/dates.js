let myDate = new Date()
console.log(myDate.toString()); //Tue Mar 05 2024 17:24:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue Mar 05 2024
console.log(myDate.toISOString()); //2024-03-05T11:58:01.694Z
console.log(myDate.toLocaleDateString()); // 5/3/2024
console.log(myDate.toLocaleString());  // 5/3/2024, 5:28:01 pm
console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 0, 23); //0 -> jan 
console.log(myCreatedDate.toDateString()); //Tue Jan 23 2024

let myCreatedDate2 = new Date(2024, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString()); //23/1/2024, 12:00:00 am

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth()); //month

//customize
myDate.toLocaleString('default', {
    weekday: "long"
})
