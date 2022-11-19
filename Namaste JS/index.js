//Hoisting////
// getName();
// console.log(x);
// console.log(y);
// console.log(getName);

// var x = 7;
// function getName (){
//      console.log('hiii');
//  }

// var getName2 = () => {
//     console.log('hiii');
// }

//  getName2();
// console.log(x);
// console.log(getName);


///////functions and variables//////////////
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x= 10;
//     console.log(x);
// }

// function b() {
//     var x= 100;
//     console.log(x);
// }


//////////undefined vs not defined/////////////

// var a;

// console.log(a);

// a=9;

// if(a === undefined){
//     console.log("a is undefined");
// } else{
//     console.log("a is not undefined");
// }

////loosely typed -> not strictly bounded with any data type/////
// var a;
// console.log(a);
// a =10;
// console.log(a);
// a = 'Hello Mitali'
// console.log(a);
// a = true
// console.log(a);


///scope chain & lexical Environment/////
// function a() {
//     var b=10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// // var b=10;
// a();
// console.log(b);



//////let & const -> Temporal Dead Zone///////
// console.log(a);
// var a;
// let b;

// a= 10;
// console.log(a);
// a=20;
// debugger;
// console.log(a);


//////////////////Block Scope////////////
{
    //compound statement
}

// if(true) {
//     var a = 10;
//     console.log('assdas');
//     console.log('assdas');
// }

// console.log('assdas', a);
// let b = 200;
// {
//     //block scop
//     var a = 10;    // var is stored in Global scope
//     let b = 20;    //let and const is stored in separate memory space which is reserved for the block
//     const c = 30;
// }
// console.log('b', b);

///////////Shadowing///////////////
//IIlegal shadowing///
// let a =10;
// {
//     var a =100;
// }

//legal shadowing///
// let a =10;
// function x(){
//     var a =100;
// }

//legal shadowing///
// let a =10;
// {
//     let a =100;
// }

//////////////clousers///////////////

// function x() {
//     let a = 8;
//     function y() {
//         console.log(a)
//     }
//     a= 100;
//     // y();
//     return y;
// }
// x()();  //to return and call inner function in same line
//OR
// var z = x();
// console.log(z);
// // z();


/////////////setTimeout---clousers///////////////
// function x() {
//     // var i =1;
//     // for (var i = 1; i <= 5; i++) {
//     for (let i = 1; i <= 5; i++) {  //let has block scope each and every time loop runs i is new copy of variable 
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log('Namaste JS');
// }
// x()

///////////To use var with setTimeout with new copy of variable////////
// function x() {
//     var i = 1;
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//     }
//     console.log('Namaste JS');
// }
// x()

////////////////////////////////////////////////////
///////////Advantages of Clousers//////////////////////////
///////////Clousers--Data hidding and encapsulation////////

// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count)
//     }
// }
// // console.log(count)  //we can't access count variable outside the fun, so noone can modify it from outside -> (count is hidden)

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();  //completely new counter it will not toch the scope of previous fun. It will create new clouser.
// counter2();


////////////clousers -->counstructor function (modularity)/////////////
// function Counter() {
//     var count = 0;
//     this.incrementCounter = function(){
//         count++
//         console.log(count)
//     }
//     this.decrementCounter = function(){
//         count--
//         console.log(count)
//     }
// }
// var counter1 = new Counter()
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter()

//////////////////////////////////////////////
///////////Disadvantages of Clousers//////////////////////////
//1.Overconsumption of memory
// 2.If we create lot of clousers it is accumulationg lot of memory
// bcz those variables are not garbage collected till the program expires.
// 3.Memoey leaks

////Garbage Collector//////
// In low level programming lang it is upto developer how to allocate and deallocate memory
// as JS is high level programing lang
//Garbage Collector -> whenever there is some unused variables it takes it out from memory, frees the memory

////////////Cousers-> Garbage Collector/////
// function a(){
//     var x = 10, z=0;
//     return function b(){
//         console.log(x);
//     }
// }

// var y = a();
// //..........x memory cannot be free until we no longer needed
// //...z variable is not used anywhere--> some browsers like V8 in Google Chrome smartely garbage collected 
// y();


/////////////////first class functions///////////////

////function statement aka function declaration////
// a();
// b()
// function a() {
//     console.log('a called')
// }
// a();

///////function expression///////
// var b =  function() {
//     console.log('b called')
// }
// b();

////Anonymous function/////  
// function () {   //syntaxError ->Function statements require a function name
                   //we can use anonymous fun in case of function expression
// }

/////Named function expression///////
// var b =  function xyz() {
//     console.log('b called')
//     console.log(xyz) //xyz is accessible inside but not in global scope.
// }
// b();
// xyz(); //ReferenceError: xyz is not defined

////////difference between Parameters and Arguments ?////////
// var b =  function(param1, param2) {
//     console.log('b called')
// }
// b('argu1','argu2'); 


////////////First Class Functions////Funs are First class Citizens in JS//////////
// The ability of functions to be use as values and
// 2.can be pass as an argument to another function and 
// 3.can be returned from the functions 
//2.
// function b(param1){
//     console.log('b',param1)
// }

// b(function(){

// })

// //2.
// function c(param1){
//     console.log('c',param1)
// }
// function xyz(){

// }
// c(xyz);

// //3.
// function a() {
//     return function(){}
// }
// console.log('a',a())


///////////////Callback functions//////////////

// setTimeout(function(){
//     console.log("timer");
// },5000)

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){      //y is callback fun ->its upto x() when to call y()
//     console.log("y");
// })

//JavaScript is synchronous and single-threaded language

//Blocking the main therad (call Stack) - Never do that

/////Event Listners/////
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked")
// })


////Clousers demo with Event Listners --> Data Hiding///////
// function attacheventListners() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("Button clicked", ++count);
//     })
// }

// attacheventListners();

////////Garbage Collection & removeEventListners/////
// we need to remove event listners as they are heavy.
// removeEventListners-->all the variables held by clousers are garbage collected

////////////////setTimeout()/////Trust Issues///////////
//once the callstack is empty then only setTimeout will execute

// console.log('Start');

// setTimeout(function cb(){
//     console.log('Callback')
// }, 5000);

// console.log('End');

// //while to run 10ms
// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
//     endDate = new Date().getTime()
// }

// console.log('While expires');

// console.log('Start');

// setTimeout(function cb(){
//     console.log('Callback')
// }, 0);

// console.log('End');


////////////////Higher Order Functions//////////////////
const radius = [1, 2, 3, 4];

const area = function(radius) {
    return Math.PI * radius * radius
}

const circumference = function(radius) {
    return 2*Math.PI*radius
}

const calculate = function(radius, logic) {
    let output = [];

    for (let i=0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

// console.log('Circumference of Circle', calculate(radius, circumference));
console.log('Area of Circle', calculate(radius, area));

//using map functionn (similar implemenation as calculate)
console.log('using map',radius.map(area));


//////***////Polyfill for map////***//////
Array.prototype.calculate = function(logic){
    let output = [];

    for (let i=0; i < this.length; i++){  //here this points to the given Array
        output.push(logic(this[i]))
    }
    return output
}

console.log('Polyfill for map',radius.calculate(area)); 

