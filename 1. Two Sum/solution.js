function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; //setting complent i th indexed element
    if (nums.includes(complement) && nums.indexOf(complement) !== i) {
      return [i, nums.indexOf(complement)]; //if complement is contained in nums then returning index of complement and the element
    }
  }
}
