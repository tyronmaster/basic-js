const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.
    map(element => element.
      split('.').
      reverse()).
    sort((a, b) => a.length - b.length);

  let dns = '';
  let domObj = {};

  for(let i = 0; i < domains.length; i++) {
    for(let j = 0; j < domains[i].length; j++){
        dns += `.${domains[i][j]}`;
        if(domObj[dns]){
            domObj[dns] += 1;
        } else {
            domObj[dns] = 1;
        }
    }
    dns = '';
  }
  return domObj;
}

module.exports = {
  getDNSStats
};
