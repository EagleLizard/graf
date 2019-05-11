
const { expect } = require('chai');

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

const mockData = require('./shortest-path-mocks');

describe('Shortest path tests', () => {
  let grafA, gridGrafMockA;
  let grafB, gridGrafMockB;
  let shortestRoute, startNode, endNode, routeWeight;

  beforeEach(() => {
    //deep copy stuff
    gridGrafMockA = deepCopy(mockData.gridGrafMockA);
    gridGrafMockB = deepCopy(mockData.gridGrafMockB);

    grafA = getGridGraf(gridGrafMockA.nodes, gridGrafMockA.edges);
    grafB = getGridGraf(gridGrafMockB.nodes, gridGrafMockB.edges);
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
});

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
