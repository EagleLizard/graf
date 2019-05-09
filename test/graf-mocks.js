
const grafEdgeMock1 = {
  nodes: [
    ['a'],
    ['b'],
    ['c'],
    ['d'],
  ],
  edges: [
    [ 'a', 'b', {
      weight: 1,
    }],
    [ 'b', 'c', {
      weight: 2,
    }],
    [ 'c', 'd', {
      weight: 3,
    }],
  ],
};

module.exports = {
  grafEdgeMock1,
};
