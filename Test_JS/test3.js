// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

function findCommon(nums) {
    const str1 = nums[0];
    const str2 = nums[1];
    const arr1 = str1.split(", ");
    const arr2 = str2.split(", ");
    const obj={}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
        
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]])
            console.log(arr2[j])
    }

}

const result = findCommon(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])
