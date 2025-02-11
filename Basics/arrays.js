//array - collection of multiple items under a single variable
//in JS arrays data may or may not be similar 
//Js arrays are resizable i.e once delared we can add more elements
//Js array copy operations create shallow copies 
//Shallow copy - copy whose properties share the same reference (like in heap)
//Deep copy - copy whose properties do not share the same reference (like in stack)

const myArr = [1,2,3,4,5] 
//console.log(myArr[1]); //2

const heros = ["ironman", "captainamerica", "hulk", "doctorstrange", "thor"];
const newArr = new Array(1,2,3,4);

//Array Methods

myArr.push(6);  
console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ] (add into array)
myArr.pop();
console.log(myArr); //[ 1, 2, 3, 4, 5 ] (delete last element from array)
myArr.shift();
console.log(myArr); //[ 2, 3, 4, 5 ] (delete first element from array)
myArr.unshift(0)
console.log(myArr); //[ 0, 2, 3, 4, 5 ] (add an element at start of array)

console.log(myArr.includes(7)); //false
console.log(myArr.indexOf(7)); //-1
console.log(myArr.indexOf(3)); //2

const anotherArr = newArr.join(); //convert an array to string
console.log(anotherArr); //1,2,3,4
console.log(typeof anotherArr); //string


console.log("A ", myArr ); //A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3); 
console.log(myn1);  //[ 2, 3 ]
console.log("B ", myArr); //B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);
console.log(myn2);  //[ 2, 3, 4 ]
console.log("C ", myArr);  //C  [ 1, 5 ]

//Splice mai kya hota hai ki jo humne range diya hota hai uss range ke elements array se hat jayenge and jo bacha hua array hoga voh answer hoga and ho sirf hatenge nhi permanentally array se delete bhi ho jayenge
//Splice original array ko manipulate karta hai

const marvel_heros = ["ironman", "captainamerica", "hulk", "doctorstrange", "thor"];
const dc_heros = ["superman", "flash", "batman", "catwomen"];
marvel_heros.push(dc_heros);
console.log(marvel_heros); //['ironman','captainamerica','hulk','doctorstrange','thor',[ 'superman', 'flash', 'batman', 'catwomen' ]]
console.log(marvel_heros[5][1]); //flash 5th element ka first word 
console.log(marvel_heros[4][1]); //h 4th element ka first word


const superheros = marvel_heros.concat(dc_heros);  //concat merges two array into a single array with each array elements as single elements for new array
console.log(superheros) //['ironman','captainamerica','hulk','doctorstrange','thor','superman','flash','batman','catwomen']

//spread operator ... (we prefer spread operator above concat as we can merge more than 2 arrays)
const all_superheros = [...marvel_heros, ...dc_heros]
console.log(all_superheros); ////['ironman','captainamerica','hulk','doctorstrange','thor','superman','flash','batman','catwomen']

const anotherArray =[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_anotherArray = anotherArray.flat(Infinity) //infinity ki jagah hume array ki depth deni chaiye
console.log(real_anotherArray); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
//Array.from can convert any value object strings boolean etc into an array

let score1 =100;
let score2 =400;
let score3 =900;
//Array.of returns new array from set of elements
console.log(Array.of(score1, score2, score3)) //[ 100, 400, 900 ]
