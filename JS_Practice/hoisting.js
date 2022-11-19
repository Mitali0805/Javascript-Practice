goodMorning('Mitali');

console.log(typeof goodMorning)  //TypeError: goodMorning is not a function

var goodMorning = function (name) {
   console.log('Good Morning', name) 
}

///////////////////////////////

// goodMorning('Mitali');

// console.log(typeof goodMorning)   //ReferenceError: cannot access goodMorning before initialization

// let goodMorning = function (name) {
//    console.log('Good Morning', name) 
// }

