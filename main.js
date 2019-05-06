
const { grafFactory, printRoute } = require('./graf/graf');
const { print } = require('./print');

const seeds = require('./seeds');

main();

function main() {
  let graf, startNode, endNode, routes, shortestRoute;
  graf = grafFactory(seeds.grafB);
  [ startNode, endNode ] = [
    'c', 'v',
  ];
  print(graf);

  routes = graf.getRoutes(startNode, endNode);
  print(`All routes from ${startNode}...${endNode} :`);
  routes.forEach(printRoute);

  shortestRoute = graf.shortPath(startNode, endNode);
  print(`Shortest route from ${startNode}...${endNode} :`);
  printRoute(shortestRoute);
}
