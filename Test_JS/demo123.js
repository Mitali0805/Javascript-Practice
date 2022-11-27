// var person = { name: "prashanth" }

// function say(age) {

//     return `I am ${this.name} , my age is ${age}`
// }

// console.log(say.call(person, 28))

// // // let obj = { name: "prashanth" }

// // function a() {
// //     let obj1 = obj;
// //     obj1['name'] = 'Kumar';
// //     return obj1;
// // }

// // let obj1 = {
// //     company: {
// //         details:
// //         {
// //             name: 'prashanth'
// //         }
// //     }
// // }

// // const obj = { name: obj1?.company.details[name] }


// // const a = {};
// // const b = { key: 'b' };
// // const c = { key: 'c' };

// // a[b] = 123;
// // a[c] = 456;

// // console.log(a[b]);

const abc = [{ a: 10, b: 40, c: 30 }, { a: 10, b: 20, c: 30 }, { a: 10, b: 20, d: 30 }]

const xyz = abc.reduce((acc, curr, index) => {
    if (index === 0) {
        acc = curr
    } else {
        for (key in curr) {
            if (acc[key]) {
                acc[key] = acc[key] + curr[key]
            } else {
                acc[key]=curr[key]
            }
        }
    }
    return acc;
}, {})
console.log(xyz)

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// setImmediate(function B() {
//     console.log("2nd immediate");
// });

// const pr = new Promise((resolve, reject) => {
//     if (true) resolve(1)
//     else reject(0)
// })

// process.nextTick(function C() {
//     console.log("1st process");
// });

// pr.then((data) => console.log(data))
//     .catch((err) => console.log(err))


// console.log('Hi')