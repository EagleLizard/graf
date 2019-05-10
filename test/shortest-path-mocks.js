
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

module.exports = {
  gridGrafMockA,
};
