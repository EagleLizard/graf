
class Edge {
  constructor(startNode, endNode, options) {
    options = options || {};
    this.startNode = startNode;
    this.endNode = endNode;
    this.weight = options.weight || 1;
  }
}

module.exports = {
  Edge,
};
