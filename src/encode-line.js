const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 0;
  for(let i = 0; i < str.length; i++){
if(str[i] == str[i+1]){
  counter++;
} else {
  counter > 0 ? result += `${counter+1}${str[i]}` : result += `${str[i]}`;
  counter = 0;
}
  }
  return result;
}

module.exports = {
  encodeLine
};
