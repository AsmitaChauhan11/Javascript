//IF

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("Hello");
}
//OUTPUT - Hello


//COMPARISON OPERATOR

//<,>,<=,>=,==(check the value are equal or not),!=,=== (used for type checking/strict checking),!==
const temperature = 15
if(temperature<50){
    console.log("less than 50");
}
console.log("greater than 50");
//OUTPUT - less than 50
// greater than 50
// the output printed both so for this we have another condition - else


//IF-ELSE

if(temperature<50){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}
//OUTPUT - less than 50

if(2 != "2"){
    console.log("yes they are no equal");   
}
else {
    console.log("false they are equal");  
}
//OUTPUT - false they are equal

if(2 !== "2"){
    console.log("yes they are no equal");   
}
else {
    console.log("false they are equal");  
}
//OUTPUT - yes they are no equal

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power : ${power}`); //User power : fly
}
// console.log(`User power : ${power}`); //ERROR - power is not defined as it in inside the scope of if 


//SHORTHAND NOTATION

const balance = 1000

//this is called as implicit scope and yeh ek he line mai execute hoga isme mostly multiple lines nhi likhte par hum likh sakte hai comma(,) laga kar par then scope will be unreadable
if(balance > 500) console.log("test"); //test
//multiple lines implicit scope (nhi karna aise)
if(balance > 600) console.log("hello"), console.log("world") 


//ELSE-IF

if(balance < 500){
    console.log("less than 500");  
}
else if (balance < 750){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200")
}
//OUTPUT - less than 1200


//LOGICAL OPERATOR 
//&&(dono statement true honi chaiye) ||(ek statement true honi chaiye)

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
} 
//OUTPUT - Allow to buy courses

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in"); 
}
//OUTPUT - User is logged in