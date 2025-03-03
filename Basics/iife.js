// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// jaise he fnction likhe usko turant execute karwana hai 
// why we need this agar jaise humne database connect kara hai toh hum chahte hai jaise he server start ho database connection bhi start ho jaye
// and kai bar global scope ke andar jo variable declare hote hai and hum nhi chahte ki function ke andar ko global scope variable kuch problem create kare so hum use krte hai iife
// global scope ke pollution se problem hoti hai kai baar so uske pollution ko hatane ke liye iife use kara


function chai(){
    console.log(`DB connected`);  //DB connected
}
chai(); 
// yahan toh immediately connect ho gaya par agar global variable hota tab iife use karte

//named iife
(function chai2(){
    console.log(`DB connected`);  //DB connected
})(); // agar semicolon nhi lagaoge toh iife ko pata nhi hota ki kab rukna hai ya end hona hai toh voh chalta rehta hai because of which next function nhi chalega and error dega

//arrow function -> unnamed iife
( () => {
    console.log(`DB connected two`) //DB connected two
})();

//parameter pass karna hai
( (name) => {
    console.log(`Hello there, ${name}`) //Hello there, hitesh
})("hitesh");