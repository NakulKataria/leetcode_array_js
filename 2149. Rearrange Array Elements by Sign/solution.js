/*You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
  let result = new Array(n);
  let posIndex = 0, negIndex = 1;

  for (let num of nums) {
      if (num > 0) {
          result[posIndex] = num;
          posIndex += 2;
      } else {
          result[negIndex] = num;
          negIndex += 2;
      }
  }
  
  return result;
};