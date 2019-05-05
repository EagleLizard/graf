
const { Node } = require('./Node');
const { Edge } = require('./Edge');
const { print } = require('../print');

class Graf {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(key, label, options) {
    this.nodes.push(new Node(key, label, options));
  }

  addEdge(startNode, endNode, options) {
    let biOptions;
    this.edges.push(new Edge(startNode, endNode, options));
    if(options.bi) {
      biOptions = options.biOptions || options;
      this.edges.push(new Edge(endNode, startNode, biOptions));
    }
  }

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
          print('Cycle detected when visiting edges:');
          print([ ...getRouteNodes(soFar), foundCycle.startNode ].join(' -> '));
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
};

function printRoute(route) {
  return print(`${getRouteNodes(route).join(' -> ')} : ${getRouteWeight(route)}`);
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
