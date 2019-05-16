
const { Graf } = require('../graf/graf');
const { shortestPath } = require('../graf/shortest-path');

class GrafWalker {
  constructor(graf) {
    if(!graf || !(graf instanceof Graf)) {
      throw new Error('GrafWalker error: GrafWalker instances must be constructed with a Graf instance.');
    }
    this.graf = graf;
  }

  *getRouteIt(startNodeKey, endNodeKey) {
    let startNode, endNode, route;
    [ startNode, endNode ] = [
      this.graf.getNode(startNodeKey),
      this.graf.getNode(endNodeKey),
    ];
    route = shortestPath(this.graf, startNode, endNode);
    for(let i = 0, currNode; i < route.length, currNode = route[i]; ++i) {
      yield currNode;
    }
  }
}

module.exports = {
  GrafWalker,
};
