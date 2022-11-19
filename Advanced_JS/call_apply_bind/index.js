///////call()///////
// let name = {
//     firstName:'Mitali',
//     lastname: 'Pawaskar',
//     printFullname: function(){
//         console.log(this.firstName + " " + this.lastname);
//     }
// }

// name.printFullname()

// let name2 = {
//     firstName:'Prajakta',
//     lastname: 'Salgaonkar'
// }

// //function borrowing -->call
// name.printFullname.call(name2);
 
//////2nd way/////////
// let name = {
//     firstName:'Mitali',
//     lastname: 'Pawaskar'
// }

//this will always refer to call methods 1st argument
// printFullname = function(hometown, state){
//     console.log(this.firstName + " " + this.lastname + " From " + hometown + "," + state);
// }

// printFullname.call(name,"Kankavli", "Maharashtra")

// let name2 = {
//     firstName:'Prajakta',
//     lastname: 'Salgaonkar'
// }

//function borrowing -->call
// printFullname.call(name2, "Mumbai", "Maharashtra")

//apply-->1st argument is always reference to this and 2nd is ArrayList////
// printFullname.apply(name2, ["Mumbai", "Maharashtra"])

/////bind method-->It will returns the method which we can call later//////
// printMyName = printFullname.bind(name2, "Mumbai", "Maharashtra")
// console.log(printMyName)
// printMyName()

//difference between call and bind and apply///
// 1.bind will return function which can be invoked later
// 2.call ->invokes fun directly by passing a refernce to this variable
// 3.apply ->exact similar to call(), only diff is it takes 2nd argument as ArrayList.

////////******/////Polyfill for bind///////******///////

let name = {
    firstName: 'Mitali',
    lastname: 'Pawaskar'
}

// this will always refer to call methods 1st argument
printName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastname + "," + hometown + "," + state + "," + country);

}

let printMyName = printName.bind(name, "Kankavli");
printMyName("Maharashtra", "India");


//own implementation of bind()
//If we keep any method in function prototype then each and every method has access to that method
Function.prototype.mybind = function (...args) {
    //this -> printName
    let obj = this
    params = args.slice(1); //It will remove first element i.e. name and return all the later elements
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);  //params is array =>apply()
    }
}

let printMyName2 = printName.mybind(name,"Kankavli");
printMyName2("Maharashtra", "India");

/////////////******////////////////*******///////////////

////////////****Currying in JS ***********///////////////
// 1. Currying using bind() functions -> bind will give copy of method it doen't invoke directly.
// --> we can make copy of one method and create more methods from it

let  multiply = function (x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(4);

// let multiplyByTwo = multiply.bind(this,2,8);
// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(4,5);


let multiplyByThree = multiply.bind(this,3);
multiplyByThree(4);

// 2. Currying using Clousers
let multiplyNew = function(x) {
    console.log(x, 'x')
    return function(y) {
        console.log(y,'y')
        console.log(x*y);
    }
}

let multiplyByTwoNew = multiplyNew(2);
multiplyByTwoNew(3);

let multiplyByThreeNew = multiplyNew(3);
multiplyByThreeNew(10);