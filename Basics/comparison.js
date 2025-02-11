console.log("2" == 2);  //true
console.log("2" === 2);  //false
console.log(true == 1);  //true


// DATA TYPES EXTRA 


let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId);  //false
console.log(id == anotherId);  //false

const heros = ["ironman", "captainamerica", "hulk" ]; //heros
let myObj = {           //object
    name: "Asmita", 
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);  //object
console.log(typeof myObj);  //object
console.log(typeof myFunction);  //function

//MEMORY IN JAVASCRIPT

let myName = "Asmita"
let anotherName = myName //Asmita
anotherName = "Hello"
console.log(anotherName) //Hello

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
console.log(userTwo)  //{ email: 'user@gmail.com', upi: 'user@ybl' }

userTwo.email = "userTwo@gmail.com" //object ko access aise karte hai
console.log(userOne);  //{ email: 'userTwo@gmail.com', upi: 'user@ybl' }
console.log(userTwo);  //{ email: 'userTwo@gmail.com', upi: 'user@ybl' }