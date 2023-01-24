function twoSum(nums:number[],target:number): number[] {
   let numsMap = new Map();

   for (let index = 0; index < nums.length; index++) {
        let compl = target - nums[index];
        if (numsMap.has(compl)) {
            console.log(numsMap.get(compl));
            return [numsMap.get(compl), index]
        } else {
            numsMap.set(nums[index],index);
        }
   }
   return [];
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

