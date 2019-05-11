
const { Node } = require('./Node');
const { Edge } = require('./Edge');
const { print } = require('../print');

class Graf {
  constructor() {
    this.nodes = [];
    this.nodeMap = new Map();
    this.edges = [];
  }

  addNode(key, label, options) {
    let node;
    node = new Node(key, label, options);
    this.nodes.push(node);
    this.nodeMap.set(node.key, node);
  }

  addEdge(startNode, endNode, options) {
    let biOptions, edge, biEdge;
    edge = new Edge(startNode, endNode, options);
    this.edges.push(edge);
    this.getNode(startNode).addNeighbor(endNode, edge);
    if(options.bi) {
      biOptions = options.biOptions || options;
      biEdge = new Edge(endNode, startNode, biOptions);
      this.edges.push(biEdge);
      this.getNode(endNode).addNeighbor(startNode, biEdge);
    }
  }

  // brute force for now
  shortPath(startNode, endNode) {
    let routes;
    routes = this.getRoutes(startNode, endNode);
    return routes.reduce((max, curr) => {
      return (getRouteWeight(curr) < getRouteWeight(max))
        ? curr
        : max ;
    }, [{ weight: Infinity }]);
  }

  getRoutes(startNode, endNode) {
    let graf, routes;
    graf = this; // avoid re-bindind 'this' on helper recursively
    routes = [];
    getRoutesHelper(startNode, []);
    return routes;
    function getRoutesHelper(currNode, soFar) {
      let nextEdges, result;
      nextEdges = graf.getEdges(currNode);
      result = nextEdges.map(edge => {
        let foundCycle;
        foundCycle = soFar.find(vistitedEdge => edge.endNode === vistitedEdge.startNode);
        if(foundCycle) {
          // print('Cycle detected when visiting edges:');
          // print([ ...getRouteNodes(soFar), foundCycle.startNode ].join(' -> '));
          return [];
        }
        if(edge.endNode === endNode) {
          routes.push([ ...soFar, edge ]);
        }
        return getRoutesHelper(edge.endNode, [ ...soFar, edge ]);
      });
      return result;
    }
  }

  getEdge(startKey, endKey) {
    return this.edges.find(edge => edge.startNode === startKey && edge.endNode === endKey);
  }

  getNode(nodeKey) {
    return this.nodeMap.get(nodeKey);
  }

  getEdges(node) {
    return this.edges.filter(edge => {
      return edge.startNode === node;
    });
  }
}

module.exports = {
  Graf,
  grafFactory,
  printRoute,
  getRouteString,
  getRouteWeight,
  getNodesRouteWeight,
  getRouteNodes,
};

function printRoute(route) {
  return print(getRouteString(route));
}

function getRouteString(route) {
  return `${getRouteNodes(route).join(' -> ')} : ${getRouteWeight(route).toFixed(1)}`;
}

function grafFactory(seed) {
  let graf;
  graf = new Graf();
  seed.nodes.forEach(node => {
    graf.addNode(...node);
  });
  seed.edges.forEach(edge => {
    graf.addEdge(...edge);
  });
  return graf;
}

function getRouteNodes(pathEdges) {
  let pathNodes;
  if(!pathEdges.length) {
    return [];
  }
  pathNodes = pathEdges.map((edge) => edge.startNode);
  pathNodes.push(pathEdges[pathEdges.length - 1].endNode);
  return pathNodes;
}

function getRouteWeight(route) {
  return route.reduce((acc, curr) => (acc + curr.weight), 0);
}

function getNodesRouteWeight(nodes, graf) {
  let weight;
  weight = 0;
  for(let i = 0, node, nextNode;
    i < nodes.length - 1, node = nodes[i], nextNode = nodes[i + 1];
    ++i
  ) {
    let edge;
    edge = graf.getEdge(node.key, nextNode.key);
    weight += edge.weight;
  }
  return weight;
}
