const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if(arr.length == 0) return [];

  var i = 0;
  var newArr = [];
  var stopWOrds = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  while(i < arr.length){
    if(!stopWOrds.includes(arr[i])) {
      newArr.push(arr[i]);
      //break;
    }
    switch (arr[i]){
      case "--discard-next": i ++; break;
      case "--discard-prev": newArr.pop(); break;
      case "--double-next": i++; if(arr[i]) {
        newArr.push(arr[i]); 
        newArr.push(arr[i]);} 
        break;
      case "--double-prev": 
      if(arr[i-2] == "--discard-next") break;
      if(arr[i-2] == "--double-next") {
        newArr.push(arr[i-1]);
        break;
      }
      if(arr[i-1]) {
        newArr.push(arr[i-1]);
        newArr.push(arr[i-1]);
        break;
       }
       
    }
    i++;
  }
  return newArr;
}

module.exports = {
  transform
};
