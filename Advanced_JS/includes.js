/*
includes() determines whether an array includes a certain value,
returning true or false as appropriate.
*/
/* Syntax
includes(searchElement)
includes(searchElement, fromIndex)
*/

const arr = ['mitali', 2, 3, 4, 5]

const item = arr.includes('mitali')
const item1 = arr.includes('mitali', 1)

console.log(item)
console.log(item1)

//If the computed index is less than or equal to 0, the entire array will be searched.
//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
//If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.
console.log([1, 2, 3].includes(2, -5))   //computedIndex = arr.length + (fromIndex) = [3 + (-5) = -2]