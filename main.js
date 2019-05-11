
const {
  grafFactory,
  getRouteString,
  getNodesRouteWeight,
} = require('./graf/graf');
const { print } = require('./print');
const {
  shortestPath,
} = require('./graf/shortest-path');

const seeds = require('./seeds');

main();

function main() {
  let graf;
  graf = grafFactory(seeds.grafB);
  testGraf(graf);
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

