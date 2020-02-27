"use strict";
// ES6 feature:
exports.__esModule = true;
// Arrow function
// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     // getName : function(){
//     //     // var that = this;
//     //     function nestFunc(){
//     //         console.log(this);
//     //         return this.firstName + " " + this.lastName;
//     //     }
//     //     return nestFunc();
//     // }
//     getName : function() {
//         var nestedFunc = () => {
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     }
// }
// console.log(user.getName());
// Template String (``)
// var fname = "Foo";
// console.log(`Hello
// ${fname}`);
// Constants and block scope - (let / const)
// function demo(arr) {
//   if (arr.length > 2) {
//     let load = "LOADING";
//     console.log(flash);                 // undefined
//   } else {
//     let flash = "FLASHING";
//   }
// }
// demo([1, 2, 3]);
// const USER = Object.freeze({
//     name : "Foo"
// });
// USER.name = "Bar";
// USER = {
//     name : "Bar"
// }
// console.log(USER);          //?
// Destructuring : ( arrays / objects)
// let arr = ["foo", "bar", "bam", "bas"];
// let  [arr1 , arr3, arr4 ] = arr;
// console.log(arr3);          // ?
// let obj = {
//     drawText : text => console.log("Drawing " + text),
//     drawCircle : r => console.log(Math.PI * r* r)
// }
// let {drawCircle : dc, drawText:  dt} = obj;
// // console.log(drawCircle(3));            // ?
// dt("Sample text");            // ?
// let user = {
//     email : "test@mail.com",
//     address : {
//         city : "Hyd",
//         street : "201, Main Road"
//     },
//     friends : ["Bar", "Bam", "Bas"]
// }
// let {email, address : { city, street}, friends : [f1,f2,f3]} = user;
// console.log(city, f2);
// Spread & Rest operator (...)
// let series = [3, 4, 5];
// // let numbers = [1, 2, ...series, 6, 7];
// let numbers = [1, 2, series, 6, 7];
// console.log(numbers); // ?
// function demo(name, ...args){
//     console.log(args[0]);           // ?        
// }   
// // demo("Foo");
// // demo("Foo", true);
// demo("Bar", false , 32);
// Decorator
// Additional types
// Classes & Inheritance
var student_1 = require("./student");
var obj = {
    firstName: "Foo",
    lastName: "Baz",
    age: 32
};
var foo = new student_1.Student(obj);
console.log(foo.sayHello());
// Module system
