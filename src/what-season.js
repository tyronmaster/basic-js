const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //if (!date) return 'Unable to determine the time of year!';
  if (date == undefined) return 'Unable to determine the time of year!';

  function getCorrectData(date) {
    if (!date || date.toString() == 'Invalid Date') {
      throw 'Invalid date!';
    }
  }

  try {
    getCorrectData(date);
    const month = date.toDateString().split(' ')[1];
    switch (month) {
      case "Dec": case "Jan": case "Feb": return "winter"; break;
      case "Mar": case "Apr": case "May": return "spring"; break;
      case "Jun": case "Jul": case "Aug": return "summer"; break;
      case "Sep": case "Oct": case "Nov": return "autumn"; break;
    };

  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getSeason
};
