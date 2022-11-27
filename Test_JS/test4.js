// const data = [{ name: "Peter H", age: 31 }, { name: "John P", age: 40 }, { name: "Roseline R", age: 16 }]

// const sortByLastName = (el) => {
//     el.name
// }

// data.map(sortByLastName)

// console.log(1 + "2" + "2");  // 122
// console.log(1 + +"2" + "2");  // 32
// console.log(1 + -"1" + "2");  // 02
// console.log(+"1" + "1" + "2"); //112
// console.log("A" - "B" + "2"); // NAN2
// console.log("A" - "B" + 2);  //NAN

// var a = {},
//     b = { key: 'b' },
//     c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]); // 456


const findMaxNumber = [3,5,8,2,48,5,5,8,2]

// console.log(Math.max(...findMaxNumber)) // to find max number

// console.log([...new Set(findMaxNumber)])  // to find unique number
// OR

const uniqueArr = findMaxNumber.filter((num,index,arr)=> arr.indexOf(num) === index)

console.log(uniqueArr, 'uniqueArr')