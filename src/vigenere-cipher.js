const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool){
    if(arguments.length == 0 || bool == "true") this.machineType = "direct";
    if(bool == "false") this.machineType = "reverse";
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.vigSquare = [];
  }
  buildSquare(){
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.vigSquare.push(row);
  }
  }
  repeatString(str1, str2) {
    let result = "";
    let elem = 0;
    for (let i = 0; i < str2.length; i++) {
        if (i % str1.length === 0) {
          elem = 0;
        }
        result += str1[elem];
        elem++;
    }
    return result;
}
  encrypt(message, key) {
    if(!message || !key || arguments.length == 0) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrMessage = "";
    let newKey = this.repeatString(key, message);
    this.buildSquare();
    for (let el = 0; el < message.length; el++) {
        let i = this.alphabet.indexOf(message[el]);
        let j = this.alphabet.indexOf(newKey[el]);
        if(i >=0 && j >=0) {
          encrMessage += this.vigSquare[i][j];
        } else {
          encrMessage += message[el];
        }
    }
    if(this.machineType == "reverse") return encrMessage.split('').reverse().join('');
    return encrMessage;
  }
  decrypt(encryptedMessage, key) {
    if(!message || !key || arguments.length == 0) throw new Error("Incorrect arguments!");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decrMessage = "";
    let newKey = this.repeatString(key, encryptedMessage);
    this.buildSquare();
    for (let el = 0; el < encryptedMessage.length; el++) {
        let i = this.alphabet.indexOf(newKey[el]);
        let j = this.square[i].indexOf(encryptedMessage[el]);
        if(i >=0 && j >=0) {
          decrMessage += this.alphabet[j];
        } else {
          decrMessage += encryptedMessage[el];
        }
    }
    if(this.machineType == "reverse") return decrMessage.split('').reverse().join('');
    return decrMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
