
const { print } = require('../print');
const { shortestPath } = require('../graf/shortest-path');

const NS_PER_SECOND = 1e9;
const NS_PER_MS = 1e6;

module.exports = {
  testHeuristic,
  testBruteForce,
  getEveryRouteFromNoes,
  hrTimeToMs,
};

function run(graf) {
  let allRoutes, bruteForceResults, heuristicResults, bruteForceMs, heuristicMs;
  allRoutes = getEveryRouteFromNoes(graf.nodes.map(node => node.key));
  print('Testing brute force method...\n');
  bruteForceResults = testBruteForce(allRoutes, graf);
  bruteForceMs = bruteForceResults.reduce((acc, curr) => {
    return acc + hrTimeToMs(curr.t);
  }, 0);
  print(`Brute Force method took ${bruteForceMs.toFixed(1)}ms`);
  print('Testing heuristic method...\n');
  heuristicResults = testHeuristic(allRoutes, graf);
  heuristicMs = heuristicResults.reduce((acc, curr) => {
    return acc + hrTimeToMs(curr.t);
  }, 0);
  print(`Heuristic method took ${heuristicMs.toFixed(1)}ms`);
  if(heuristicMs < bruteForceMs) {
    print(`Heuristic method is faster by ${Math.floor((bruteForceMs / heuristicMs) * 100).toLocaleString()}%`);
    print('~'.repeat(69));
    print('~~~ Heuristic method also dumber, does not find best route always ~~~');
    print('~'.repeat(69));
  }
}

function testHeuristic(routes, graf) {
  let results, t;
  results = [];
  for(let i = 0, route; i < routes.length, route = routes[i]; ++i) {
    let result;
    t = process.hrtime();
    result = shortestPath(graf, graf.getNode(route[0]), graf.getNode(route[1]));
    t = process.hrtime(t);
    results.push({
      result,
      t,
    });
    // process.stdout.write('.');
  }
  return results;
}

function testBruteForce(routes, graf) {
  let results, t;
  results = [];
  for(let i = 0, route; i < routes.length, route = routes[i]; ++i) {
    let result;
    t = process.hrtime();
    result = graf.shortPath(route[0], route[1]);
    t = process.hrtime(t);
    results.push({
      result,
      t,
    });
    // process.stdout.write('.');
  }
  return results;
}

function getEveryRouteFromNoes(nodes) {
  let routes;
  routes = [];
  for(let i = 0, currNode; i < nodes.length, currNode = nodes[i]; ++i) {
    let otherNodes;
    otherNodes = nodes.slice();
    otherNodes.splice(i, 1);
    for(let k = 0, otherNode; k < otherNodes.length, otherNode = otherNodes[k]; ++k) {
      routes.push([ currNode, otherNode ]);
    }
  }
  return routes;
}

function hrTimeToMs(hrtimeDiff) {
  let ns, ms;
  ns = hrtimeDiff[0] * NS_PER_SECOND + hrtimeDiff[1];
  ms = ns / NS_PER_MS;
  return ms;
}
