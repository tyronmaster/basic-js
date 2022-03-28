const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (!this.chain) this.chain = [];

    if (typeof value === 'undefined') {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {

    if (position > 0 && position <= this.getLength() && Number.isInteger(position)) {
      this.chain.splice((position - 1), 1);
    } else {
      this.chain = null;
      throw new Error("You can\'t remove incorrect link!");
    }

    /*
     try {
       if ((position - 1) >= 0 && (position - 1) < this.getLength()) {
         this.chain.splice(position - 1, 1);
       }
     } catch (err) {
       throw new Error("You can\'t remove incorrect link!");
     }
     */
    return this;
  },

  reverseChain() {
    if (this.chain) this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = `${this.chain.join("~~")}`;
    this.chain = null;
    return result;
  }
};

module.exports = {
  chainMaker
};
