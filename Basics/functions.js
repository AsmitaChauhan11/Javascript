console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
//If i want to print this console 10 times I will have to write it 10 times which is hectic so we use functions 

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName() //function call/execution/reference

function addTwoNumbers(number1, number2){ //parameters
    console.log(number1+number2)
}
addTwoNumbers(2,3) //5 -> arguments
// addTwoNumbers(2,"3") //23
// addTwoNumbers(2,"a") //2a
// addTwoNumbers(2,null) //2 

const result = addTwoNumbers(3,5) //8 ayega jab console.log(number1+number2) run karega lekin result ki value undefined ari hai
console.log("Result: ",result) 

function addTwoNumbers2(number1, number2){ //parameters
    let result2 = number1+number2
    return result2
    //return number1+number2
    // console.log("Hitesh") //result ke baad kuch bhi print nhi hota
}
const result2 = addTwoNumbers2(3,5) 
console.log("Result: ",result2)  //Result:  8

// both result2 are different results because of scope of variable

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh")) //hitesh just logged in
console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) //undefined just logged in

//so we will use if else
function loginUserMessage2(username){
    if(username == undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2("hitesh")) //hitesh just logged in
console.log(loginUserMessage2("")) // just logged in
console.log(loginUserMessage2())  //Please enter a username undefined

function loginUserMessage3(username){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3("hitesh")) //hitesh just logged in
console.log(loginUserMessage3("")) //Please enter a username undefined
console.log(loginUserMessage3())  //Please enter a username undefined

//default value like if no parameter is passed then by default this value will be used 
function loginUserMessage4(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage4("hitesh")) //hitesh just logged in
console.log(loginUserMessage4("")) //Please enter a username undefined
console.log(loginUserMessage4())  //sam just logged in

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2)) //2
console.log(calculateCartPrice(200, 400, 500)) //200
// you see only the price of first item is printed i.e 200 so there is a rest operator to solve this problem 

function calculateCartPrice2(...num1){ //... is rest operator and spread operator but the uses for both are different syntax is same, in this situation it is a rest operator 
    return num1
}
console.log(calculateCartPrice2(200, 400, 500)) //[ 200, 400, 500 ]

function calculateCartPrice3(val1, val2, ...num1){ //... is rest operator and spread operator but the uses for both are different syntax is same, in this situation it is a rest operator 
    return num1
}
console.log(calculateCartPrice3(200, 400, 500)) //[ 500 ] because 200 is stored in val1 and 400 is store in val2 so only 500 left


//OBJECT ko function ke saath kaise use karna hai

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user); //Username is hitesh and price is 199

//direct object bhi pass kar sakte hai hum log 
handleObject({
    username: "sam",
    price: 200
}) //Username is sam and price is 200


//ARRAY ko function mai pass karna

const myArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray)); //600
console.log(returnSecondValue([400,100,700,300])); //700

