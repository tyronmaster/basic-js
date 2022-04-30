const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  const min = (Math.min(...arr)).toString();
  const max = (Math.max(...arr)).toString();
  arr.indexOf(max) == 1 ? arr.splice(0, 1) : arr.splice(arr.indexOf(min), 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
