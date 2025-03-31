// FOR OF LOOP

//all these loops are array specific loops

["", "", ""]
[{}, {}, {}]

//FOR OF LOOP

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);  
}

// 1
// 2
// 3
// 4
// 5

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet);
}

// H
// e
// l
// l
// o
// (space)
// W
// o
// r
// l
// d

// MAPS

//Map object holds key value pairs and remembers the original insertion order of the keys.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
console.log(map)

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
// }

//even if we duplicate the values like I write India twice it will still be printed once

for (const key of map) {
    console.log(key);
}

// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

//How to print only key or value

for (const [key, value] of map) {
    console.log(`Key is: ${key} and Value is: ${value}`);
}

// Key is: IN and Value is: India
// Key is: USA and Value is: United States of America
// Key is: FR and Value is: France

const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(value`Key : ${key} and Value : ${value}`);
}

//ERROR -> can't iterate objects using for of loop
// for (const [key, value] of myObject) {
//     ^
// TypeError: myObject is not iterable


//FOR IN LOOP


const myObject2 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject2) {
    console.log(key);
}

// js
// cpp
// rb
// swift

//key ke saath object bhi chaiye
for (const key in myObject2) {
    console.log(myObject2[key]);
}

// javascript
// c++
// ruby
// swift by apple

for (const key in myObject2) {
    console.log(`${key} is the shorthand for ${myObject2[key]}`);
}

// js is the shorthand for javascript
// cpp is the shorthand for c++
// rb is the shorthand for ruby
// swift is the shorthand for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key); 
}

//for in loop mai keys aati hai value nhi 
//for of loop/ map wagehra sabme values ati hai
// 0
// 1
// 2
// 3
// 4

for (const key in programming) {
    console.log(programming[key]); 
}

// js
// rb
// py
// java
// cpp

const map2 = new Map()
map2.set("IN", "India")
map2.set("USA", "United States of America")
map2.set("FR", "France")

for (const key in map2) {
    console.log(key);
}

// nothing is printed as Map() is not interatable 

//object ke andar loop lagana hai toh for in loop
//array ke andar loop lagana hai toh for of loop


//FOR EACH LOOP

const coding = ["js","ruby","java","python","cpp"]
//forEach is a callback function -> basically call back functions mai function ka name nhi likhte hai
//callback function ke andar variable ka name kuch bhi pass kar sakte hai value, val, item ,num etc
coding.forEach( function (item) {
    console.log(item); 
})

// js
// ruby
// java
// python
// cpp

coding.forEach( (val) => {
    console.log(val);  
})

// js
// ruby
// java
// python
// cpp

function printMe(item){
    console.log(item);   
}

coding.forEach(printMe)

// js
// ruby
// java
// python
// cpp

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


//array ke andar objects ka access kaise lena hai
const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})

// javascript
// java
// python

