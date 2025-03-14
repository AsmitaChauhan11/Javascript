// FOR LOOP

let array = [10,20,30,40,50,60,70,80,90,100]
for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    if (element == 50){
        console.log("50 is best number ");
    }
    console.log(element);
    
}

// 10
// 20
// 30
// 40
// 50 is best number 
// 50
// 60
// 70
// 80
// 90
// 100

for (let index = 0; index <= 10; index++) {
    console.log(`Outer loop value : ${index}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value : ${j} and outer loop value ${index}`)
    }
}

// Outer loop value : 0
// Inner loop value : 0 and outer loop value 0
// Inner loop value : 1 and outer loop value 0
// Inner loop value : 2 and outer loop value 0
// Inner loop value : 3 and outer loop value 0
// Inner loop value : 4 and outer loop value 0
// Inner loop value : 5 and outer loop value 0
// Inner loop value : 6 and outer loop value 0
// Inner loop value : 7 and outer loop value 0
// Inner loop value : 8 and outer loop value 0
// Inner loop value : 9 and outer loop value 0
// Inner loop value : 10 and outer loop value 0
// Outer loop value : 1
// Inner loop value : 0 and outer loop value 1
// Inner loop value : 1 and outer loop value 1
// Inner loop value : 2 and outer loop value 1
// Inner loop value : 3 and outer loop value 1
// Inner loop value : 4 and outer loop value 1
// Inner loop value : 5 and outer loop value 1
// Inner loop value : 6 and outer loop value 1
// Inner loop value : 7 and outer loop value 1
// Inner loop value : 8 and outer loop value 1
// Inner loop value : 9 and outer loop value 1
// Inner loop value : 10 and outer loop value 1

for (let index = 0; index <= 10; index++) {
    console.log(`Outer loop value : ${index}`)
    for (let j = 0; j <= 10; j++) {
        console.log(index + "*" + j + "=" + index*j)
    }
}

// Outer loop value : 0
// 0*0=0
// 0*1=0
// 0*2=0
// 0*3=0
// 0*4=0
// 0*5=0
// 0*6=0
// 0*7=0
// 0*8=0
// 0*9=0
// 0*10=0
// Outer loop value : 1
// 1*0=0
// 1*1=1
// 1*2=2
// 1*3=3
// 1*4=4
// 1*5=5
// 1*6=6
// 1*7=7
// 1*8=8
// 1*9=9
// 1*10=10

let myArray = ["iron man", "captain america", "flash"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// 3
// iron man
// captain america
// flash


//BREAK and CONTINUE

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected"); 
        break;
    }
    console.log(`Value of i is ${index}`)
}

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// 5 is detected

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`Value of i is ${index}`)
}

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// 5 is detected
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20


// WHILE LOOP

let index = 1;
while (index<=10) {
    console.log(`Value of i is ${index}`);
    index += 2;
}

// Value of i is 1
// Value of i is 3
// Value of i is 5
// Value of i is 7
// Value of i is 9

let myArray2 = ['flash','batman','superman'];
let arr = 0;
while (arr < myArray2.length) {
    console.log(`Value is ${myArray2[arr]}`);
    arr++;
}

// Value is flash
// Value is batman
// Value is superman


// DO WHILE LOOP
//do while mai kaam pehle hota hai and condition baad mai check hoti hai toh ek baar to loop chalega he
let score = 1
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<=10);

// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// Score is 6
// Score is 7
// Score is 8
// Score is 9
// Score is 10

