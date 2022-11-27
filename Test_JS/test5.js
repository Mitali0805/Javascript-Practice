// // console.log(b());

// // var b = function() {
// //     console.log('Hoistiong')
// //     return 1
// // }

// // console.log(1<2>3)

// // for (var i=0; i<5; i++){
// //     function a(i) {
// //         setTimeout(()=>{
// //             console.log(i);
// //         }, 0)
// //     }
// //     a(i)
// // }

// // var obj = {
// //     name: 'abc',
// // 	fun: function (...num1) {
// // 	    console.log(this.name, num1[0]);
// // 	}
// // }

// // var obj1 = {
// //     name: 'mitali'
// // }

// // obj.fun.call(obj1,7, 9)

// // new1()


// arr = [12, 13, 5,6,7,2,4, 3]

// // o/p => num needs to grater than all the RHS num

// const num = arr.reduce((acc, curr, index, arr) => {
// 	let flag = false
// 	for (let i = index + 1; i < arr.length; i++) {
// 		if (curr < arr[i]) {
// 			flag = false
// 			break
// 		} else flag = true;
// 	}
// 	if (flag) acc.push(curr)
// 	if (index === arr.length - 1) acc.push(arr[arr.length - 1])
// 	return acc
// }, [])

// console.log(num, 'num') // [13, 7, 4, 3]


var singleNumber = function (nums) {
	let numObj = {}
	for (num of nums) {
		numObj[num] = numObj[num] + 1 || 1
	}
	for(key in numObj){
		if(numObj[key] === 1){
			return key
		}
	}
};

console.log(singleNumber([4, 1, 2, 1, 2]))