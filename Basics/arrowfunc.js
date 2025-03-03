const user = {
    name: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to the website`); //this ka matlab hai current context ko refer karna that is object ke kisi bhi variable ko agar function ko access karna hai toh this.variablename se karega access   
    }
}
user.welcomeMessage() //hitesh , welcome to the website
user.name = "sam"
user.welcomeMessage() //sam , welcome to the website
//humne value hardcore nhi karri thi ki jo object ke andar likha hoga wahi print hoga, balki jo bhi current context hai uske ander jo bhi name ki value hogi voh print hogi


const user2 = {
    name: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to the website`); 
        console.log(this);    
    }
}
user2.welcomeMessage() 
//hitesh , welcome to the website 
//yeh neeche wala hai output for console.log(this)
//{ name: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }
user2.name = "sam"
user2.welcomeMessage() 
//sam , welcome to the website
//{ name: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }


const user3 = {
    name: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to the website`);           
    }
}
console.log(this); //{} kyuki hum node environment ke andar hai isliye empty as abhi koi global variable hai he nhi
//pehle jub hum js ko windows i.e chrome inspect mai run karte the tab iska output ata tha "window" kyunki js search engine ke andar run hora hai
//browser andar ke jo global object hai voh window object hai 


function chai(){
    console.log(this);
}
chai()

//yeh saari values hai 

// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }


function chai2(){
    let username = "hitesh"
    console.log(this.username); //undefined
    //yeh this function jo hai voh object ke liye hai function ke andar nhi use kar sakte
}
chai2()

const chai3 = function (){
    let username = "hitesh"
    console.log(this.username); //undefined
}
chai3()

const chai4 = () => {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); //{}
}
chai4()


//ARROW FUNCTION syntax

// () => {}  BASIC ARROW FUNCTION OR EXPLICIT RETURN

const addTwoNum = (num1, num2) =>{
    return num1 + num2;
}
console.log(addTwoNum(2,5)) //7

//IMPLICIT RETURN

//iska matlab return keywork likhne ki jarurat nhi kyunki { curly braces } nhi use karri

const addTwoNum2 = (num1, num2) =>  num1 + num2;
console.log(addTwoNum2(2,5)) //7
//or you can write like this 
const addTwoNum3 = (num1, num2) => (num1 + num2);
console.log(addTwoNum3(2,5)) //7

// why this ( paranthesis ) is important because to return an object we need to wrap it in paranthesis
const addTwoNum4 = (num1, num2) =>  {username: "hitseh"};
console.log(addTwoNum4(2,5)) //undefined

const addTwoNum5 = (num1, num2) =>  ({username: "hitseh"});
console.log(addTwoNum5(2,5)) //{ username: 'hitseh' }

const myArray = [2,5,7,6,1]
myArray.forEach(function () {})
myArray.forEach(()=>{})
