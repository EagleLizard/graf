const { PriorityQueue } = require('./priority-queue');
// const { print } = require('../print');

module.exports = {
  shortestPath,
  defaultHeuristic,
};

function nodeComparator(a, b) {
  if(a.h < b.h) {
    return 1;
  } else if(a.h > b.h) {
    return -1;
  }
  return 0;
}

function shortestPath(graf, startNode, endNode, heuristic, soFar) {
  let neighbors;
  if(!soFar) {
    soFar = initSoFar(startNode);
  }
  soFar.currentNode = startNode;
  heuristic = heuristic || defaultHeuristic;
  // print(`startNode: ${startNode.key}`);
  neighbors = startNode.neighbors
    .filter(nodeKey => !soFar.visited.has(nodeKey))
    .map(nodeKey => graf.getNode(nodeKey))
    .reduce((acc, curr) => {
      let h;
      h = heuristic(curr, endNode, graf.getEdge(soFar.currentNode.key, curr.key).weight);
      acc.push({
        node: curr,
        h,
      });
      return acc;
    }, new PriorityQueue(nodeComparator));
  // if(startNode.key === 'a') {
  //   print(`Neighbors of ${startNode.key}:`);
  //   print(neighbors.items);
  //   print(`neighbors.length: ${neighbors.length}`);
  // }
  while(neighbors.length) {
    let toVisit, edge, tempWeight, result;
    toVisit = neighbors.pop();
    if(toVisit.node.key === endNode.key) {
      // print(`${[ ...soFar.parents, soFar.currentNode, toVisit.node ].map(node => node.key).join(' -> ')} : ${soFar.currentBestVal}`);
      return [ ...soFar.parents, soFar.currentNode, toVisit.node ];
    }
    // print('toVisit');
    // print(toVisit);
    // print('soFar.currentNode:');
    // print(soFar.currentNode);
    edge = graf.getEdge(soFar.currentNode.key, toVisit.node.key);
    tempWeight = (soFar.currentBestVal || 0) + edge.weight;
    // print('tempWeight');
    // print(tempWeight);
    if(soFar.currentBestVal === undefined) {
      soFar.currentBestVal = tempWeight;
    }
    if(soFar.visited.has(toVisit.node.key)) {
      continue;
    }
    soFar.currentBestVal = tempWeight;
    soFar.visited.add(toVisit.node.key);
    soFar.parents.push(soFar.currentNode);
    soFar.currentBestVal = tempWeight;
    // print(soFar.parents.map(parent => parent.key).join(', '));
    result = shortestPath(graf, toVisit.node, endNode, heuristic, soFar);
    if(result !== undefined) {
      return result;
    }
    // print(soFar);
    soFar.currentNode = soFar.parents.pop();
  }
}

function defaultHeuristic(startNode, endNode, d) {
  let dx, dy;
  d = d || 1;
  dx = Math.abs(endNode.x - startNode.x);
  dy = Math.abs(endNode.y - startNode.y);
  return d * Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function initSoFar(currentNode) {
  let soFar, currentBestVal, parents, visited;
  currentBestVal = undefined;
  parents = [];
  visited = new Set();
  visited.add(currentNode.key);
  soFar = {
    currentBestVal,
    parents,
    currentNode,
    visited,
  };
  return soFar;
}
