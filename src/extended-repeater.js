const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
str = String(str);
Object.keys(options).includes('repeatTimes') ? options.repeatTimes = Number(options.repeatTimes) : options.repeatTimes = 1;
Object.keys(options).includes('separator') ? options.repeatTimes = String(options.repeatTimes) : options.separator = "+";
Object.keys(options).includes('addition') ? options.addition = String(options.addition) : options.addition = "";
Object.keys(options).includes('additionRepeatTimes') ? options.additionRepeatTimes = Number(options.additionRepeatTimes) : options.additionRepeatTimes = 1;
Object.keys(options).includes('additionSeparator') ? options.additionSeparator = String(options.additionSeparator) : options.additionSeparator = "|";
// build addition string
let additionString = '';
for(let i = 1; i < options.additionRepeatTimes; i++){
  additionString += `${options.addition}${options.additionSeparator}`;
}
additionString += `${options.addition}`;

//build main string + addition string
let mainString = '';
for(let i = 1; i < options.repeatTimes; i++){
  mainString += `${str}${additionString}${options.separator}`;
}
mainString += `${str}${additionString}`;
return mainString;
}

module.exports = {
  repeater
};
