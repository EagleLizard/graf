
const gridGrafMockA = {
  nodes: [
    [
      ['a'],
      ['b'],
      ['c'],
      ['d'],
    ],
    [
      ['e'],
      ['f'],
      ['g'],
      ['h'],
    ],
    [
      ['i'],
      ['j'],
      ['k'],
      ['l'],
    ],
    [
      ['m'],
      ['n'],
      ['o'],
      ['p'],
    ],
  ],
  edges: [
    [ 'a', 'b' ],
    [ 'b', 'c' ],
    [ 'c', 'd' ],
    [ 'a', 'e' ],
    [ 'c', 'g' ],
    [ 'd', 'h' ],
    [ 'e', 'f' ],
    [ 'h', 'l' ],
    [ 'i', 'j' ],
    [ 'j', 'k' ],
    [ 'k', 'l' ],
    [ 'i', 'm' ],
    [ 'm', 'n' ],
    [ 'n', 'o' ],
    [ 'o', 'p' ],
  ],
};

const gridGrafMockB = {
  nodes: [
    [
      ['a'],
      ['b'],
      ['c'],
    ],
    [
      ['e'],
      ['f'],
      ['g'],
    ],
    [
      ['i'],
      ['j'],
      ['k'],
    ],
    [
      ['m'],
      ['n'],
      ['o'],
    ],
  ],
  edges: [
    [ 'a', 'b' ],
    [ 'b', 'c' ],
    [ 'a', 'e' ],
    [ 'b', 'f' ],
    [ 'c', 'g' ],
    [ 'e', 'f' ],
    [ 'f', 'g' ],
    [ 'e', 'i' ],
    [ 'f', 'j' ],
    [ 'g', 'k' ],
    [ 'i', 'j' ],
    [ 'j', 'k' ],
  ],
};

module.exports = {
  gridGrafMockA,
  gridGrafMockB,
};
