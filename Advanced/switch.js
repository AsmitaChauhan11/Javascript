//BASIC SYNTAX OF SWITCH

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1: 
        console.log("January");
        break;
    case 2: 
        console.log("Februray");
        break;
    case 3: 
        console.log("March");
        break;
    case 4: 
        console.log("April");
        break;
    case 5: 
        console.log("May");
        break;
    case 6: 
        console.log("June");
        break;
    case 7: 
        console.log("July");
        break;
    case 8: 
        console.log("August");
        break;
    case 9: 
        console.log("September");
        break;
    case 10: 
        console.log("October");
        break;
    case 11: 
        console.log("November");
        break;
    case 12: 
        console.log("December");
        break;
    default:
        console.log("ERROR - Check the value");
        break;
}
//OUTPUT - March


//TRUTHY and FALSY VALUES

const userEmail = "hitesh@123.ai"
if(userEmail){
    console.log("Got user email");   
}
else{
    console.log("Don't have user email"); 
}
//OUTPUT - Got user email
//And if const userEmail = "" then OUTPUT - Don't have user email
//const userEmail = [] -> OUTPUT - Got user email

//FALSY VALUES - false, "", 0, -0, BigInt (0n), null, undefined, NaN(Not a Number)
//TRUTHY VALUES - true, "abc(any string)", 1, "0", 'false', " ",[]empty array,{}empty object, function(){}empty function

//way to check an empty array or object
const userEmail2 = [] 
if (userEmail2.length === 0){
    console.log("Array is empty");
}
//OUTPUT - Got user email

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object")
}
//OUTPUT - Empty object
//Object.keys(emptyObj) -> converted object to an array of keys

//false == 0 ->true
//false == '' ->true
//0 == '' -> true


//NULLISH COALESCING OPERATOR (??)

//2 keywords -> null & undefined

let val1;
val1 = 5 ?? 10
// console.log(val1); //5
val1 = null ?? 10
console.log(val1); //10
//in the above the output will be 10 as this nullish coalescing operator check if any value is provided other it will assign null

let var1;
var1 = undefined ?? 15
console.log(var1); //15

let val2
val2 = null ?? 10 ?? 15
console.log(val2); //10 -> pehli value assign ho jayegi

//yeh basically ek fall back hai agar error ayega toh kaunsi value assign karni hai 


//TERNARY OPERATOR 

//codition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80") //more than 80
