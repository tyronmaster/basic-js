const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  members = members.filter(item => typeof (item) == 'string').map(item => item.split(' ').join(''));
  return members.map(item => item.toUpperCase().split('').filter((item, index) => index == 0).join()).sort().join('');
}

module.exports = {
  createDreamTeam
};
