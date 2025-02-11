// //CONVERSION

let score = 33; //int
console.log(typeof score); //number

let score2 = "33" 
console.log(typeof(score2)); //string
let valueInNumber = Number(score2);
console.log(typeof valueInNumber);  //number

let score3 = "33abc"; //string
let valueInNumber2 = Number(score3); 
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //Nan (Not a number)

let score4 = null; //null
let valueInNumber3 = Number(score4); 
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); //0

let score5 = undefined; //undefined
let valueInNumber4 = Number(score5); 
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); //NaN

let score6 = true; //boolean
let valueInNumber5 = Number(score6); 
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //1

// // "33" => 33
// // "33abc" => NaN
// // null => 0
// // undefined => NaN
// // "true" => 1, "false" => 0

let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "Asmita"; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true , false, true

// // 1 => true, 0 => false
// // "" => false, "Asmita" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log(typeof stringNumber); // string

// OPERATIONS

let value = 3;
let negValue = -value;
console.log(negValue)
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;
console.log(str3);
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log("1" + 2 + "2" + 1); //1221
console.log(1 + 2 + "2" + 1); //321
console.log("1" + 2 + 2 + 1); //1221

//agar pehle string hai toh baaki ka sara string mai he convert hoga 
//lekin agar pele numbers hai toh voh add honge then jahan se string ayega wahan se string shuru ho jayega

console.log(+true);
console.log(+"");

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"