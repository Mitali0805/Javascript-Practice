let arr = ["Mitali"]

let object1 = {
    name: "Mitali",
    city: "darjeeling",
    getIntro: function () {
        console.log(this.name + ' from ' + this.city)
    }
}

let object2 = {
    name: "Prajakta"  // object2.__proto__ (is nothing but Object.prototype)
}

//Prototype Inheritance
//never do this: it affect the performance
object2.__proto__ = object1;   //object2 is inherit properties/methos from proto which is pointing to the object