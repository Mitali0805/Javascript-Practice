const str = "I love My India";

const splitArr = [];
let start = str.length;
let end;
for (let i = str.length; i >= 0; i--) {
    if (str[i] === ' ') {
        end = start;
        start = i;
        let a = '';
        for (let j = start; j < end; j++) {
            a += str[j];
        }
        splitArr.push(a)
    }
    if (i === 0) {
        let a = ' ';
        for (let j = 0; j <= start; j++) {
            a += str[j];
        }
        splitArr.push(a)
    }
}

console.log(splitArr)