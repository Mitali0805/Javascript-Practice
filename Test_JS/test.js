// // const options = {
// //     data: {
// //         username
// //     },
// //     headers: {
// //         api_keys: "gkdaldadla",
// //         api_secrets: "test"
// //     }
// // }

// // axios.get('test.adc.', options).then((res) => res).catch(err => throw err)


// // async function abc() {
// //     const arr = [];
// //     const data1 = getstockDetails() //
// //     const data2 = getstocks()

// //     let data;
// //     setInterval(()=>{
// //         data = getstockDetails()

// //     }, 2000)
// // }


console.log(null === undefined);

// flatten the Array

let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9]
]
// method 1
console.log(arr.flat(2))  // depth = 2 (to flatten the 2 level deep array )

// method 2
const a = [].concat(...arr)
console.log(a)


//clousers//

function b() {
    for (var i = 0; i < 3; i++) {
        function c(i){
            setTimeout(() => {
                console.log(i)
            }, i * 1000)
        }
        c(i)
    }
}

b();