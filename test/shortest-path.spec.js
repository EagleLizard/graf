
const { expect } = require('chai');

const {
  getGridGraf,
} = require('../graf/graf-generator');
const {
  shortestPath,
} = require('../graf/shortest-path');
const {
  getNodesRouteWeight,
} = require('../graf/graf');

const mockData = require('./shortest-path-mocks');

describe('Shortest path tests', () => {
  let grafA, gridGrafMockA;
  let shortestRoute, startNode, endNode;

  beforeEach(() => {
    //deep copy stuff
    gridGrafMockA = JSON.parse(JSON.stringify(mockData.gridGrafMockA));

    grafA = getGridGraf(gridGrafMockA.nodes, gridGrafMockA.edges);
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
    let routeWeight;
    startNode = grafA.getNode('a');
    endNode = grafA.getNode('p');
    shortestRoute = shortestPath(grafA, startNode, endNode);
    routeWeight = getNodesRouteWeight(shortestRoute, grafA);
    expect(routeWeight).to.equal(12);
  });
});
