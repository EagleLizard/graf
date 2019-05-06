
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

const fourHundredSouth = 1.28;
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
    ['w'],
    ['x'],
    ['y'],
    ['z'],
    ['aa'],
    ['ab'],
  ],
  edges: [
    [ 'v', 'u' ],
    [ 'e', 'f' ],
    [ 'f', 'h' ],
    [ 'h', 'm' ],
    [ 'm', 'o' ],
    [ 'o', 'q' ],
    [ 'q', 's' ],
    [ 's', 'u' ],

    [ 'd', 'g', {
      weight: fourHundredSouth,
    }],
    [ 'g', 'i', {
      weight: fourHundredSouth,
    }],
    [ 'i', 'n', {
      weight: fourHundredSouth,
    }],
    [ 'n', 'p', {
      weight: fourHundredSouth,
    }],
    [ 'p', 'r', {
      weight: fourHundredSouth,
    }],

    [ 'p', 'aa' ],
    [ 'y', 'aa' ],

    [ 'aa', 'ab' ],
    [ 'z', 'ab' ],

    [ 'a', 'b' ],
    [ 'b', 'c' ],
    [ 'c', 'j' ],
    [ 'j', 'k' ],
    [ 'k', 'l', {
      weight: 2, // uvu roundabout
    }],
    [ 'b', 'd' ],
    [ 'd', 'e' ],
    [ 'g', 'w' ],
    [ 'w', 'l' ],
    [ 'w', 'x', {
      weight: 3, // this part of 800S next to uvu is congested, winding
    }],
    [ 'x', 'l' ],
    [ 'x', 'y' ],
    [ 'y', 'z' ],
    [ 'k', 'z', {
      weight: 3, // uvu to 400W has stoplights, traffic
    }],
    [ 'f', 'g' ],
    [ 'h', 'i' ],
    [ 'm', 'n' ],
    [ 'p', 'o' ],
    [ 'q', 'r' ],
    [ 'r', 't' ],
    [ 's', 't' ],
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
