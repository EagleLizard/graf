
const { expect } = require('chai');

const {
  grafFactory,
  getRouteWeight,
} = require('../graf/graf');

const {
  grafEdgeMock1,
} = require('./graf-mocks');

describe('Tests graph static (non-pathfinding) methods', () => {
  let graf, edges, weight;
  it('Tests edge weight summation', () => {
    graf = grafFactory(grafEdgeMock1);
    edges = graf.edges;
    weight = getRouteWeight(edges);
    expect(weight).to.equal(6);
  });
});
