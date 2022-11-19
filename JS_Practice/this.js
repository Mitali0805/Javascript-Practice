// function printThis() {
//     console.log(this);
// }

// printThis()

// let obj = {
//     a:10,
//     b:20,
//     c:printThis,
//     d: function() {
//         printThis
//     }
// }

// // obj.c()

// // let x = obj.c()  // c() doesn't return anything as x is not function
// // x()
// // console.log(x === printThis)

// ////////////////

// // let x = obj.c   // as we are not calling the fun will just get the reference
// // x()
// // console.log(x == printThis)

// ////////////
// obj.d()

////////////////Hitesh///////////////////////
console.log(this);

var user = {
    name:"Mitali",
    course:5,
    getCourseCount: function() {
        console.log("Line37", this);
        function sayHello () {
            console.log("Line39", this) 
        }
        sayHello(); //for all regular fun calls this points to window object
    }
}

user.getCourseCount();

var a = 'i19';
var b = 'p0'

if(a>b){
    console.log(a)
}else{
    console.log(b)
}