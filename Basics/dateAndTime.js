let myDate = new Date()
console.log(myDate.toString()); //Tue Feb 11 2025 20:20:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()) //2025-02-11T20:20:10.090Z
console.log(myDate.toJSON()) //2025-02-11T20:20:10.090Z
console.log(myDate.toLocaleDateString()) //2/11/2025
console.log(myDate.toLocaleTimeString()) //8:20:10 PM
console.log(myDate.toTimeString()) //20:20:10 GMT+0000 (Coordinated Universal Time)

let myCreatedDate = new Date(2025,1,12); //single digit month ke liye array 0 se hoga 
console.log(myCreatedDate); //2025-02-12T00:00:00.000Z
console.log(myCreatedDate.toDateString()); //Wed Feb 12 2025

let myCreatedDate2 = new Date(2025,1,12,1,54,45);
console.log(myCreatedDate2); //2025-02-12T01:54:45.000Z
console.log(myCreatedDate2.toLocaleString()); // 2/12/2025, 1:54:45 AM

let myCreatedDate3 = new Date("2025-02-12"); // agar YYYY-MM-DD mai month 1 se shuru hoga
// console.log(myCreatedDate3.toLocaleString()); // 2/12/2025, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1739305847195 1 Jan 1970 se abhi tk ka milli second value
console.log(myCreatedDate3.getTime()); //1739318400000 
console.log(Math.floor(Date.now()/1000)); //1739306035 (seconds mai convert kar diya)

let newDate = new Date();
console.log(newDate.getDate()); //11
console.log(newDate.getDay()); //2 tuesday
console.log(newDate.getFullYear()); //2025
console.log(newDate.getMilliseconds()); //876
console.log(newDate.getMinutes()); //36
console.log(newDate.getMonth()+1); //2
console.log(newDate.getTime()); //1739306202876

let change = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(change); //instead of TUES it comes Tuesday
