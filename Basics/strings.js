const name = "Asmita";
const age = 22;
console.log(name + age);  //don't use this as it is outdated
console.log(`My name is ${name} and my age is ${age}`); //My name is Asmita and my age is 22

const myName = new String("hitesh");
console.log(myName[0]);  //h
console.log(myName.length); //6
console.log(myName.charAt(2));  //t
console.log(myName.toUpperCase()); //HITESH
console.log(myName.indexOf('t')); //2

const gameName = new String("hitesh-hc");
const newString = gameName.substring(0,4); //can't take -ve values
console.log(newString); //hite 
const anotherString = gameName.slice(-8,4); //slice array mai (0-4) hai toh 0,1,2,3 hoga 4 include nhi hota yeh n-1 tk print karta hai
console.log(anotherString);  //ite

const newStringOne = "        hitesh         "
console.log(newString.trim()); //hitesh (removes white spaces)

const url = 'https://abc.com/123%20def'
console.log(url.replace('%20','-'));  //https://abc.com/123-def
console.log(url.includes('abc')); //true

const stringValue = 'Hello World, How are you ?';
console.log(stringValue.split(' ')); //[ 'Hello', 'World,', 'How', 'are', 'you', '?' ]