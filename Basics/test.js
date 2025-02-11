"use strict"; //treat all JS code as newer version

// console.log("Asmita");
const accountId = 144553;
let accountEmail = "abcd123@gmail.com";      //block scoped
var accountPassword = "12345";    //functional scoped
let accountCity = "Jaipur";

// accountId = 2;
// console.log(accountId);  //error

accountEmail = "wxyz890@gmail.com";
accountPassword = "121212";
accountCity = "Bengaluru";
console.table([accountId,accountEmail,accountPassword,accountCity]); //everything in tabular format

let accountState;
console.log(accountState); //undefined

// alert(3+3); //error as we are using node not web browser, it will word when you integrate JS file inside html

// number => 1,2,44 => 2 power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof null); //object
console.log(typeof undefined);  //undefined