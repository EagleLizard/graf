
const { expect } = require('chai');
const chalk = require('chalk');

const {
  getGridGraf,
} = require('../graf/graf-generator');
const {
  shortestPath,
} = require('../graf/shortest-path');
const {
  getRouteWeight,
  getNodesRouteWeight,
  getRouteNodes,
} = require('../graf/graf');

const {
  testHeuristic,
  testBruteForce,
  getEveryRouteFromNoes,
  hrTimeToMs,
} = require('./shortest-route-perf');

const mockData = require('./shortest-path-mocks');

describe('Shortest path tests', () => {
  let grafA, gridGrafMockA;
  let grafB, gridGrafMockB;
  let grafC, gridGrafMockC;
  let shortestRoute, startNode, endNode, routeWeight;

  beforeEach(() => {
    //deep copy stuff
    gridGrafMockA = deepCopy(mockData.gridGrafMockA);
    gridGrafMockB = deepCopy(mockData.gridGrafMockB);
    gridGrafMockC = deepCopy(mockData.gridGrafMockC);

    grafA = getGridGraf(gridGrafMockA.nodes, gridGrafMockA.edges);
    grafB = getGridGraf(gridGrafMockB.nodes, gridGrafMockB.edges);
    grafC = getGridGraf(gridGrafMockC.nodes, gridGrafMockC.edges);
  });

  it('Tests the default heuristic', () => {
    let routeKeyString;
    startNode = grafA.getNode('a');
    endNode = grafA.getNode('p');
    shortestRoute = shortestPath(grafA, startNode, endNode);
    routeKeyString = shortestRoute.map(node => node.key).join('');
    expect(routeKeyString).to.equal('abcdhlkjimnop');
  });

  it('Tests getNodesRouteWeight function', () => {
    startNode = grafA.getNode('a');
    endNode = grafA.getNode('p');
    shortestRoute = shortestPath(grafA, startNode, endNode);
    routeWeight = getNodesRouteWeight(shortestRoute, grafA);
    expect(routeWeight).to.equal(12);
  });

  it('Tests the brute force shortPath function', () => {
    let routeKeyString;
    startNode = grafB.getNode('a');
    endNode = grafB.getNode('k');
    shortestRoute = grafB.shortPath(startNode.key, endNode.key);
    routeKeyString = getRouteNodes(shortestRoute).join('');
    expect(routeKeyString).to.equal('abcgk');
  });

  it('Tests the getRouteWeight (by edges) function', () => {
    let edges;
    edges = [
      [ 'a', 'b' ],
      [ 'b', 'c' ],
      [ 'c', 'g' ],
      [ 'g', 'k' ],
    ].map(nodePair => grafB.getEdge(...nodePair));
    routeWeight = getRouteWeight(edges);
    expect(routeWeight).to.equal(4);
  });

  it('[SLOW TEST] Tests that the default heuristic is faster than the brute force method', (done) => {
    let allRoutes, bruteForceResults, heuristicResults, bruteForceMs, heuristicMs;
    // console.log(
    //   chalk.yellow('[WARN] The following test may take more than 9969ms')
    // );

    after(() => {
      console.log(
        chalk.cyan(`Heuristic method is faster by ${Math.floor((bruteForceMs / heuristicMs) * 100).toLocaleString()}%`)
      );
    });

    allRoutes = getEveryRouteFromNoes(grafC.nodes.slice(0, 5).map(node => node.key));
    bruteForceResults = testBruteForce(allRoutes, grafC);
    bruteForceMs = bruteForceResults.reduce((acc, curr) => {
      return acc + hrTimeToMs(curr.t);
    }, 0);
    heuristicResults = testHeuristic(allRoutes, grafC);
    heuristicMs = heuristicResults.reduce((acc, curr) => {
      return acc + hrTimeToMs(curr.t);
    }, 0);
    new Promise((resolve) => {
      resolve();
    }).then(() => {
      expect(heuristicMs).to.be.lessThan(bruteForceMs);
      done();
    }).catch(done);
  }).timeout(Number.MAX_SAFE_INTEGER);
});

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
