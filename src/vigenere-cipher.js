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

  constructor(type){
    if(arguments.length == 0 || type == true){
      this.type = "direct";
    } else if(type == false){
      this.type = "reverse";
    } else {
      throw new Error("Wrong init parameters");
    }
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key){
    if(arguments.length != 2 || !arguments[0] || !arguments[1]){
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedString = '';
    key = this.repeatString(message, key);

    for(let i = 0; i < message.length; i++){
      let letterMessage = message[i];
      let letterKey = key[i];
      let symbolAdd = letterMessage;
      if(this.alphabet.includes(letterMessage)){
        let letterNumber = ((this.alphabet.indexOf(letterMessage) + this.alphabet.indexOf(letterKey)) % 26);
        symbolAdd = this.alphabet[letterNumber];
      }
      encryptedString += symbolAdd;
    }
    return this.type === "direct" ? encryptedString : encryptedString.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key){
    if(arguments.length != 2 || !arguments[0] || !arguments[1]){
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let deryptedString = '';
    key = this.repeatString(encryptedMessage, key);

    for(let i = 0; i < encryptedMessage.length; i++){
      let letterMessage = encryptedMessage[i];
      let letterKey = key[i];
      let symbolAdd = letterMessage;
      if(this.alphabet.includes(letterMessage)){
        let letterNumber = ((26 + this.alphabet.indexOf(letterMessage) - this.alphabet.indexOf(letterKey)) % 26);
        symbolAdd = this.alphabet[letterNumber];
      }
      deryptedString += symbolAdd;
    }
    return this.type === "direct" ? deryptedString : deryptedString.split("").reverse().join("");
  }

  repeatString(str1, str2) {
    let result = "";
    let elem = 0;

    for(let i = 0; i < str1.length; i++) {
      if (elem % str2.length === 0) {
          elem = 0;
      }
      if(this.alphabet.includes(str1[i])){
          result += str2[elem];
          elem++;
      } else {
          result += str1[i];
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
