
const {
  grafFactory,
  getRouteString,
  getNodesRouteWeight,
} = require('./graf/graf');
const { GrafWalker } = require('./graf-walker/graf-walker');
const { print } = require('./print');
const {
  shortestPath,
} = require('./graf/shortest-path');

const seeds = require('./seeds');

main();

function main() {
  let graf;
  graf = grafFactory(seeds.grafB);
  // testGraf(graf);
  testGrafWalker(graf);
}

async function testGrafWalker(graf) {
  let grafWalker, walkerIt, nextVal, currNode, taskResult;
  grafWalker = new GrafWalker(graf);
  walkerIt = grafWalker.getRouteIt('a', 'v');
  while(!(nextVal = walkerIt.next()).done) {
    currNode = nextVal.value;
    taskResult = await currNode.task(taskResult || 0);
    print(taskResult);
  }
}

function testGraf(graf) {
  let startKey, endKey, startNode, endNode, shortestRoute, shortestPathRoute;
  [ startKey, endKey ] = [
    'a', 'v',
  ];
  startNode = graf.getNode(startKey);
  endNode = graf.getNode(endKey);
  shortestPathRoute = shortestPath(graf, startNode, endNode);
  shortestRoute = graf.shortPath(startKey, endKey);
  print(`Shortest route from ${startKey}...${endKey} :`);
  print('> Without heuristic:');
  print(`\t${getRouteString(shortestRoute)}`);
  print('> With heuristic:');
  print(`\t${shortestPathRoute.map(node => node.key).join(' -> ')} : ${getNodesRouteWeight(shortestPathRoute, graf)}`);
}

