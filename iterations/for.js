//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);   
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
   console.log(element);
}

//out of bound exeption is not present -> if a value outside the index value is consoled it will print 'undefined'

// break and continue

for (let index = 1; index <= 20; index++) {
    if(inedx == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(inedx == 5){
        console.log("Detected 5");
        continue; //ek bar skip kr do
    }
    console.log(`Value of i is ${index}`);
}
