
const { grafFactory, printRoute } = require('./graf/graf');
const { print } = require('./print');

const seeds = require('./seeds');

main();

function main() {
  let graf, startNode, endNode, routes, shortestRoute;
  graf = grafFactory(seeds.grafB);
  [ startNode, endNode ] = [
    'a', 'v',
  ];
  print(graf);
  routes = graf.getRoutes(startNode, endNode);
  shortestRoute = graf.shortPath(startNode, endNode);
  print(`All routes from ${startNode}...${endNode} :`);
  routes.forEach(printRoute);
  print(`Shortest route from ${startNode}...${endNode} :`);
  printRoute(shortestRoute);
}
