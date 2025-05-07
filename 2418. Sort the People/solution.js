/*You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights. */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let hash = new Map();
   
   // Step 1: Map each height to the corresponding name
   for (let i = 0; i < names.length; i++) {
       hash.set(heights[i], names[i]);
   }
   
   // Step 2: Sort the heights in ascending order
   heights.sort((a, b) => b-a);
   
   // Step 3: Reassign names based on sorted heights using the map
   for (let i = 0; i < names.length; i++) {
       names[i] = hash.get(heights[i]);
   }
   
   return names;
   };