
const { expect } = require('chai');

const {
  grafFactory,
  getRouteWeight,
  getNodesRouteWeight,
} = require('../graf/graf');

const {
  grafEdgeMock1,
} = require('./graf-mocks');

describe('Tests graph static (non-pathfinding) methods', () => {
  let graf, edges, nodes, weight;

  beforeEach(() => {
    graf = grafFactory(grafEdgeMock1);
  });

  it('Tests edge weight summation', () => {
    edges = graf.edges;
    weight = getRouteWeight(edges);
    expect(weight).to.equal(6);
  });

  it('Tests edge weight summation given list of nodes', () => {
    nodes = graf.nodes;
    weight = getNodesRouteWeight(nodes, graf);
    expect(weight).to.equal(6);
  });
});
