let a = 10
const b = 20
var c = 30

console.log(a); //10
console.log(b); //20
console.log(c); //30

//{} -> scope agar yeh function ya if else ke saath aye 
//object wala {} object declaration wala alag hota hai

if(true){
    let a = 10
    const b = 20
    var c = 30
}


console.log(a); //error
console.log(b); //error
console.log(c); //30 -> cause var scope ko follow nhi karta 

let d = 300
if(true){
    let a = 10
    let d = 30
    console.log("Inner : ", d) //Inner :  30
}
console.log(d) //300


//NESTED SCOPE

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //hitesh
        
    }
    //console.log(website); //error -> website is not defined 
    two()
}
one()
//closure -> andar ka function(child) bahar ke function(parent) ko access kar pata hai

if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        console.log(username + website); //hiteshyoutube
    }
    //console.log(website); //error -> website is not defined
}
//console.log(username); //error -> username is not defined


//INTERESTING CONCEPT

// agar hum pehle bhi likhenge toh bhi chalega code 
// console.log(addOne(5)) //6 
function addOne(num){
    return num + 1
}
console.log(addOne(5)) //6

//isme error ajayega ki cannot access addTwo before initialization so it depends on function kaise declare karre ho 
//this is called hoisting -> function kaise declare kiya hai, kahan rakha jata hau , kaise execution hora hai 
//addTwo(5)
const addTwo = function(num){ //function expression
    return num + 2
}
addTwo(5)