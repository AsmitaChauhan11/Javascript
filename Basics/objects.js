//singleton - when we create an obj from a constructor it becomes singleton object i.e yeh apne tarah ka ek he obj hai
//literals ki tarah declare karenge toh singleton nhi banega

Object.create //constructor se banaya hai and singleton hai

// OBJECT LITERALS

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",  //system name ko string he manega "name" i.e key ko string he manta hai uski value string do, number do vo humari marzi
    "full name": "Hitesh Chodhary",
    // mySym: "mykey1", //wrong isme yeh symbol nhi string typeof ka ho gaya 
    [mySym]: "mykey1", //symbol ko refer karne ke liye use []
    age: 22,
    location: "Delhi",
    email: "abc123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} //this is object

//how to access the objects
console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser.full name); //error
console.log(jsUser["full name"]); //that is why we have to use square brackets
console.log(jsUser.mySym) //mykey1 print toh ho jayega lekin mySym ka datatype symbol nhi ayega
console.log(typeof jsUser.mySym) //string
//isliye the correct way to print it is 
console.log(jsUser[mySym]);

jsUser.email = "hitesh@gmail.com" //to overwrite values
//Object.freeze(jsUser) //koi changes nhi ho payega

jsUser.greeting = function(){
    console.log("Hello js user")
}
console.log(jsUser.greeting) //[Function (anonymous)]
console.log(jsUser.greeting()) //Hello js user

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsUser.greeting2()); //Hello js user, Hitesh



// SINGLETON OBJECTS

const tinderUser2 = {} //literal object
console.log(tinderUser2); //{}
const tinderUser = new Object() //singleton object
console.log(tinderUser); //{}
tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sammy",
            lastname: "Warren"
        } 
    }
}
console.log(regularUser.fullname) //{ userfullname: { firstname: 'Sammy', lastname: 'Warren' } }
console.log(regularUser.fullname.userfullname) //{ firstname: 'Sammy', lastname: 'Warren' }
console.log(regularUser.fullname.userfullname.firstname) //Sammy

console.log(regularUser.fullname?.userfullname.firstname) //? protection karta hai matlab agar value hai toh kariye
//Sammy

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = {obj1, obj2} 
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2) //it is nice to write {} first target hai and baaki obj1, obj2 source hai 
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = {...obj1, ...obj2}
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "a@gmail.com"
    },
    {
        id:3,
        email: "m@gmail.com"
    },
]

users[1].email //first object ka email chaiye

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
//datatype - array keys jo hai array mai agayi now we can apply loops and other things

console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
//to check if uske pass particular property hai ki nhi



// OBJECT DESTRUCTURING 

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//to print any value we can write
console.log(course.courseInstructor); //hitesh

const {courseInstructor} = course
console.log(courseInstructor); //hitesh

const {courseInstructor: instructor} = course //object destructing karna humne rather than writting courseInstructor usko instructor se change kar diya
console.log(instructor); //hitesh

 //react mai destructurig 
 const navbar = ({instructor})=>{

 }
 navbar(instructor = "hitesh")

// JSON API

{
    "name": "hitesh",
    "courseName": "js in hindi", //this is json api, this is how your api will be shown
    "price": "free"  
}

[
    {},
    {}, //array as an object ki tarah bhi api mil sakta hai
    {}
]

//json formatter used to study the api