
const {
  grafFactory,
  printRoute,
  getNodesRouteWeight,
} = require('./graf/graf');
const { print } = require('./print');
const {
  shortestPath,
  defaultHeuristic,
} = require('./graf/shortest-path');

const seeds = require('./seeds');
const shortestRouteTest = require('./test/shortest-route-perf');

main();

function main() {
  let graf;
  graf = grafFactory(seeds.grafB);
  shortestRouteTest.run(graf);
  // testGraf(graf);
  // testPQueue();
}

function testGraf(graf) {
  let startKey, endKey, startNode, endNode, routes, shortestRoute, shortestPathRoute;
  [ startKey, endKey ] = [
    'a', 'v',
  ];
  print(graf);
  startNode = graf.getNode(startKey);
  endNode = graf.getNode(endKey);

  // routes = graf.getRoutes(startKey, endKey);
  // print(`All routes from ${startKey}...${endKey} :`);
  // routes.forEach(printRoute);
  print('Start Node:');
  print(startNode);
  print('End Node:');
  print(endNode);
  print(`Default heuristic for ${startKey} -> ${endKey} : ${defaultHeuristic(startNode, endNode)}`);
  shortestPathRoute = shortestPath(graf, startNode, endNode);
  shortestRoute = graf.shortPath(startKey, endKey);

  print(`Shortest route from ${startKey}...${endKey} :`);
  print(' > Without heuristic:');
  printRoute(shortestRoute);
  print(' > With heuristic:');
  print(`${shortestPathRoute.map(node => node.key).join(' -> ')} : ${getNodesRouteWeight(shortestPathRoute, graf)}`);
}

