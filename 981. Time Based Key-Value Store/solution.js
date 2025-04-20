/*Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".*/


var TimeMap = function() {
    this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
   if (!this.map[key]) {
       this.map[key] = [];
   }
   this.map[key].push({ timestamp, value });
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
   if (!this.map[key]) return "";

   let arr = this.map[key];
   let left = 0, right = arr.length - 1;
   let result = "";

   while (left <= right) {
       let mid = Math.floor((left + right) / 2);
       if (arr[mid].timestamp <= timestamp) {
           result = arr[mid].value;
           left = mid + 1; // move right to find largest timestamp ≤ target
       } else {
           right = mid - 1;
       }
   }

   return result;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/