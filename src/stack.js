const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(element) {
    this.length++;
    this.storage[this.length] = element;
  }

  pop() {
    let removed = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return removed;
  }

  peek() {
    return this.storage[this.length];
  }
}

module.exports = {
  Stack
};
