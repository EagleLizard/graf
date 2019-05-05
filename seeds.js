
const grafA = {
  nodes: [
    ['a'],
    ['b'],
    ['c'],
    ['d'],
    ['e'],
    ['f'],
    ['g'],
  ],
  edges: [
    [ 'a', 'b' ],
    [ 'b', 'd' ],
    [ 'd', 'f' ],
    [ 'd', 'e' ],
    [ 'e', 'f' ],
    [ 'e', 'c' ],
    [ 'c', 'a' ],
    [ 'f', 'd' ],
    [ 'f', 'g' ],
    [ 'e', 'g' ],
  ],
};

const fourHundredWest = 2;
const grafB = {
  nodes: [ // 'abcdefghijklmnopqrstuv'.split('').map(c=>[c]);
    ['a'], ['b'], ['c'],
    ['d'], ['e'], ['f'],
    ['g'], ['h'], ['i'],
    ['j'], ['k'], ['l'],
    ['m'], ['n'], ['o'],
    ['p'], ['q'], ['r'],
    ['s'], ['t'], ['u'],
    ['v'],
  ],
  edges: [
    [ 'a', 'b' ],
    [ 'b', 'c' ],
    [ 'c', 'j' ],
    [ 'j', 'k' ],
    [ 'k', 'l' ],
    [ 'b', 'd' ],
    [ 'd', 'e' ],
    [ 'd', 'g', {
      weight: fourHundredWest,
    }],
    [ 'g', 'l' ],
    [ 'e', 'f' ],
    [ 'f', 'g' ],
    [ 'f', 'h' ],
    [ 'g', 'i', {
      weight: fourHundredWest,
    }],
    [ 'h', 'i' ],
    [ 'h', 'm' ],
    [ 'i', 'n', {
      weight: fourHundredWest,
    }],
    [ 'm', 'n' ],
    [ 'm', 'o' ],
    [ 'n', 'p', {
      weight: fourHundredWest,
    }],
    [ 'p', 'o' ],
    [ 'o', 'q' ],
    [ 'p', 'r', {
      weight: fourHundredWest,
    }],
    [ 'q', 'r' ],
    [ 'q', 's' ],
    [ 'r', 't' ],
    [ 's', 't' ],
    [ 's', 'u' ],
    [ 'u', 'v' ],
  ],
};

// make all grafB edges bi
grafB.edges = grafB.edges.map(edge => {
  let opts;
  if(edge.length < 3) {
    edge.push({});
  }
  opts = Object.assign({
    bi: true,
  }, edge[2]);
  edge[2] = opts;
  return edge;
});

module.exports = {
  grafA,
  grafB,
};
