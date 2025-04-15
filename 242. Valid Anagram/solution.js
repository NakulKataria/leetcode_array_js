/*Given two strings s and t, return true if t is an anagram of s, and false otherwise*/
 //my solution
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str1=s.split('').sort().join('');
    let str2=t.split('').sort().join('');
    if(str1===str2)return true;
    return false;
    
};


// found better runtime solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    else{
       let arr = new Array(128).fill(0);//new array for all ascii value
       for(let i=0;i<s.length;i++){
          arr[s.charCodeAt(i)]++;//increment when character occurs
          arr[t.charCodeAt(i)]--;//decrement when character occurs
       }
       for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0) return false;//if inc and dec are equal all elements in array should be 0
       }
       return true;
    }
};