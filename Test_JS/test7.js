// var x =1;
// var y =2;

// var z = function(a,c){
//     return (function(b){
//         console.log(a, b);
//     })(c)
// }

// z(x,y)

// 534976 -> 536479 -----> next largest number
function nextLargestNum(num) {
    numArr = num.toString().split('');
    for (let i = numArr.length; i > 0; i--) {
        let a;
        if (numArr[i] > numArr[i - 1]) {
            let newArr = numArr.splice(i)
            sortedArr = newArr.sort((a, b) => a - b)
            if (numArr[i - 1] < newArr[0]) {
                let temp;
                temp = numArr[i - 1]
                numArr[i - 1] = newArr[0]
                newArr[0] = temp
                a = numArr.concat(newArr)
            }
            return a;
        }
    }
}

console.log(nextLargestNum(534976))

//////find missing number //////////

const arr = [1, 3, 5, 2, 6]

const sortArr = arr.sort((a, b) => a - b)

const a = sortArr.reduce((acc, curr, index, array) => {
    if (curr + 1 !== array[index + 1] && curr > array[array.length-1]) {
        acc.push(curr + 1)
    } else {
        acc.push(curr)
    }
    return acc
}, [])

console.log(a)