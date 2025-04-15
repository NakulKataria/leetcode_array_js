/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');//sort krke key banao
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);//use key ke arrray me dalte rho
    }

    return Array.from(map.values());
};
