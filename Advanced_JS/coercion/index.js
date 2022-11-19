console.log('5' - 5)  // 0
console.log('5' + 5)  // 55


console.log(typeof typeof '5') // string
console.log(typeof typeof 5) // string
console.log(typeof typeof {a:8}) // string

const adder = true + 5;
const adder1 = false + 5;
console.log(adder, adder1) // 6, 5

console.log('true' == true) // false
console.log(1 == true) // true
console.log('5' == 5) // true
console.log('null' == null) // false

// values consideredd as false
// false
// 0
// ''
// undefined
// null
// NAN

console.log(Boolean('true'), '***')

// typeof null          // "object" (not "null" for legacy reasons)
// typeof undefined     // "undefined"
// null === undefined   // false
// null  == undefined   // true
// null === null        // true
// null  == null        // true
// !null                // true
// isNaN(1 + null)      // false
// isNaN(1 + undefined) // true