
const passThroughTask = async (input) => input;

class Node {
  constructor(key, label, options) {
    options = options || {};
    this.key = key;
    this.label = label;
    this.task = options.task || passThroughTask;
    this.inputMax = options.inputMax;
    this.outputMax = options.outputMax;
  }
}

module.exports = {
  Node,
};
