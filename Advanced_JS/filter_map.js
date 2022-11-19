// const arr = [1, 2, 3, 4, 5]

// //filter
// const filteredArr = arr.filter(item => item < 4)

// console.log(filteredArr)

// //map
// //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const mapArr = arr.map(num => num * 2)
// console.log("map", mapArr)

// //filter
// const evenArr = arr.filter(num => num%2===0)
// console.log(evenArr)


const users = [
    { first: 'Mitali', last: 'Pawaskar', age: 24 },
    { first: 'Prajakta', last: 'Salgaonkar', age: 23 },
    { first: 'Mita', last: 'Pawaskar1', age: 20 },
    { first: 'Mitu', last: 'Pawaskar1', age: 33 },
    { first: 'Nitu', last: 'Pawaskar1', age: 23 },
    { first: 'Rohini', last: 'Pawaskar1', age: 40 }

]

//map
// const fullNameMap = users.map(user => user.first + ' ' + user.last)
// console.log('fullNameMap', fullNameMap);

// //reduce
// const fullName = users.reduce((acc, curr) => {
//     acc.push(curr.first + ' ' + curr.last)
//     return acc;
// }, [])

// console.log('fullName', fullName)

// o/p => {24:1, 23:2, 20:1}
const ageCount = users.reduce((acc, curr) => {
    let count = 1;
    if (acc[curr.age])
        acc[curr.age] = count + 1;  //++acc[curr.age]
    else
        acc[curr.age] = count //1
    return acc;
}, {})

console.log('ageCount', ageCount)

//firstname of users whose age<30
//reduce
// const userName = users.reduce((acc, curr) => {
//     if (curr.age < 30)
//         acc.push(curr.first)
//      return acc   
// }, [])

// OR filter map chaining
const userName = users.filter(x => x.age<30).map(x=> x.first)

console.log('userName', userName)
