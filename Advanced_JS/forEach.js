const arr = [1, 2, 3, 4, 5]

/* forEach()
executes a provided function once for each array element
does not rturn anything.
*/
let num = 0
arr.forEach(item => {
    console.log(item)
    num++
})

console.log("postIncrement", num)

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(logArrayElements)

let words = ['1', 'two', 'three', 'four']
words.forEach(function (word) {
    console.log(word)
    if (word === 'two') {
        words.shift() //'one' will delete, removes first element frm array
    }
}) // 1 // three // four

console.log(words);  //['two', 'three', 'four']
