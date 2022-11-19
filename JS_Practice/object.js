let obj1 = {a:10, b:20}

let obj2 = Object.create(obj1)
// obj2.a = 200;

console.log(obj2)
console.log(obj2.a)
obj2.a++;

obj1.a = 99
console.log(obj2.a)