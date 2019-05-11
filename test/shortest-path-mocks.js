
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
/*
  Visual representation of graf structure can be found at:
    https://www.lucidchart.com/documents/view/d980af7a-84da-46f2-9ca6-c8c9b5701fbb/0
*/
const gridGrafMockC = {
  nodes: [
    [
      ['a'],
      ['b'],
      ['c'],
      ['d'],
      ['q'],
    ],
    [
      ['e'],
      ['f'],
      ['g'],
      ['h'],
      ['r'],
    ],
    [
      ['i'],
      ['j'],
      ['k'],
      ['l'],
      ['s'],
    ],
    [
      ['m'],
      ['n'],
      ['o'],
      ['p'],
      ['t'],
    ],
    [
      ['u'],
      ['v'],
      ['w'],
      ['x'],
      ['y'],
    ],
  ],
  edges: [
    [ 'a', 'b' ],
    [ 'b', 'c' ],
    [ 'c', 'd' ],
    [ 'd', 'q' ],

    [ 'a', 'e' ],
    [ 'b', 'f' ],
    [ 'd', 'h' ],
    [ 'q', 'r' ],

    [ 'e', 'f' ],
    [ 'f', 'g' ],
    [ 'g', 'h' ],
    [ 'h', 'r' ],

    [ 'e', 'i' ],
    [ 'e', 'j' ],
    [ 'f', 'i' ],
    [ 'f', 'j' ],
    [ 'g', 'k' ],
    [ 'r', 's' ],

    [ 'i', 'j' ],
    [ 'j', 'k' ],
    [ 'k', 'l' ],
    [ 'l', 's' ],

    [ 'i', 'm' ],
    [ 'j', 'n' ],
    [ 'l', 'p' ],
    [ 's', 't' ],

    [ 'm', 'n' ],
    [ 'n', 'o' ],
    [ 'o', 'p' ],
    [ 'p', 't' ],

    [ 'm', 'u' ],
    [ 'o', 'w' ],
    [ 't', 'y' ],

    [ 'u', 'v' ],
    [ 'v', 'w' ],
    [ 'w', 'x' ],
    [ 'x', 'y' ],
  ],
};

module.exports = {
  gridGrafMockA,
  gridGrafMockB,
  gridGrafMockC,
};
