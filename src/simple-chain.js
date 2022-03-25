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
    if (!this.chain) {
      this.chain = [`( ${value} )`];
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {

    if ((position - 1) >= 0 && (position - 1) < this.getLength() && typeof (position) == 'number') {
      this.chain.splice(position - 1, 1);
    } else {
      throw new Error('You can\'t remove incorrect link!');
    }

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    return this.chain.join("~~");
  }
};

module.exports = {
  chainMaker
};
