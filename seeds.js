
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

const xMod = 100;
const yMod = 100;
const fourHundredSouth = 1.28;
const grafB = {
  nodes: [ // 'abcdefghijklmnopqrstuv'.split('').map(c=>[c]);
    [
      [ 'v', undefined, {
        x: xMod * 7,
      }],
    ],
    [
      ['e'],
      ['f'],
      ['h'],
      ['m'],
      ['o'],
      ['q'],
      ['s'],
      ['u'],
    ],
    [
      ['d'],
      ['g'],
      ['i'],
      ['n'],
      ['p'],
      ['r'],
      ['t'],
    ],
    [
      ['b'],
      ['a'],
      ['w'],
      ['x'],
      ['y'],
      ['aa'],
    ],
    [
      [ 'l', undefined, {
        x: xMod * 3,
      }],
    ],
    [
      ['c'],
      ['j'],
      ['k'],
      ['z'],
      ['ab'],
    ],
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
    [ 'b', 'c', {
      weight: 3, // 2 traffic lights, left turn on Univ Pkwy
    }],
    [ 'c', 'j' ],
    [ 'j', 'k' ],
    [ 'k', 'l', {
      weight: 2, // uvu roundabout
    }],
    [ 'b', 'd' ],
    [ 'd', 'e' ],
    [ 'g', 'w' ],
    [ 'w', 'l', {
      weight: 2, // long road
    }],
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


let yVal = 0;
for(let y = 0, row; y < grafB.nodes.length, row = grafB.nodes[y]; ++y) {
  let xVal = 0;
  if(row[0][0] === 'c') {
    // university parkway is odd, start with higher xval
    xVal = xMod * 3;
  }
  for(let x = 0, node; x < row.length, node = row[x]; ++x) {
    let options;
    if(node.length < 2) {
      node.push(undefined);
    }
    if(node.length < 3) {
      node.push({});
    }
    options = node[2];
    node[2] = Object.assign({}, {
      x: xVal,
      y: yVal,
    }, options);
    xVal += xMod;
  }
  yVal += yMod;
}
// flatten the 2d array
grafB.nodes = grafB.nodes.reduce((acc, curr) => {
  return [ ...acc, ...curr ];
}, []);

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
