// NUMBERS

const score = 400;
console.log(score); //400
const balance = new Number(500);
console.log(balance); //[Number: 500]
console.log(balance.toString()); // 500 (coverted to string)
console.log(balance.toString.length); //1
console.log(balance.toFixed(2)); //500.00

const numberValue = 23.8966;
console.log(numberValue.toPrecision(3));  //23.9
const anotherNumber = 123.8966;
console.log(anotherNumber.toPrecision(3));  //124
const anotherNumber2 = 1123.8966;
console.log(anotherNumber2.toPrecision(3));  //1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString());  //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//MATHS

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4)); //4 (convert to +ve value)
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5 (upper value mai hoga convert)
console.log(Math.floor(4.9)); //4 (lower value mai hoga convert)
console.log(Math.pow(2,3)); //8 
console.log(Math.min(4,9,8,7,3)); //3
console.log(Math.max(2,3,8,7,5)); //8


console.log(Math.random()) //values come between 0-1 (0.122494,0.478392,.....)
let n = Math.random();  //0.7631600118841846
n = n*6; //4.239784928499349
n = Math.floor(n) + 1  // 4 + 1
console.log(n) //5

//rather than writing 3 lines we can use a shortcut 
const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //6