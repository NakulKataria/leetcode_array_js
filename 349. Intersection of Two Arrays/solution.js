/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.*/

/**
 * @param {number[]} num1
 * @param {number[]} num2
 * @return {number[]}
 */
var intersection = function(num1, num2) {
    let set= new Set();
    num1.sort((a,b)=>a-b);
    num2.sort((a,b)=>a-b);
    let i=0,j=0;
    while(i<num1.length && j<num2.length){
        if( num1[i]===num2[j]){
          set.add(num1[i]);
          i++;
          j++
        } else if(num1[i]<num2[j]){
            i++;
        }else {
            j++;
        }
    }
    return Array.from(set);

  
};