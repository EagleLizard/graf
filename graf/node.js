
const passThroughTask = async (input) => input;

class Node {
  constructor(key, label, options) {
    options = options || {};
    this.key = key;
    this.label = label;
    this.task = options.task || passThroughTask;
    this.inputMax = options.inputMax;
    this.outputMax = options.outputMax;
    this.neighborMap = new Map();
    this.x = options.x === undefined ? Infinity : options.x;
    this.y = options.y === undefined ? Infinity : options.y;
  }

  addNeighbor(nodeKey, edge) {
    this.neighborMap.set(nodeKey, edge);
  }

  get neighbors() {
    return [...this.neighborMap.keys()];
  }
}

module.exports = {
  Node,
};
