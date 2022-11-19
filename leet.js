
const twoSum = function(nums, target) {
   const arr = nums.reduce((acc,current,) => {
     acc.push(current)
     return acc;
   },[])
   console.log('arr', arr)
};

twoSum([1,2,3],3);

