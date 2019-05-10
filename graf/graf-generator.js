
const {
  grafFactory,
} = require('./graf');

module.exports = {
  getGridGraf,
};

function getGridGraf(nodeMatrix, edges, options) {
  let yVal, xVal, yMod, xMod, nodes;
  options = options || {
    xMod: 10,
    yMod: 10,
  };
  yMod = options.yMod;
  xMod = options.xMod;
  yVal = 0;
  for(let y = 0, row; y < nodeMatrix, row = nodeMatrix[y]; ++y) {
    xVal = 0;
    for(let x = 0, node; x < row.length, node = row[x]; ++x) {
      let nodeOptions;
      if(node.length < 2) {
        node.push(undefined);
      }
      if(node.length < 3) {
        node.push({});
      }
      nodeOptions = node[2];
      node[2] = Object.assign({}, {
        x: xVal,
        y: yVal,
      }, nodeOptions);
      xVal += xMod;
    }
    yVal += yMod;
  }
  // flatten the matrix
  nodes = nodeMatrix.reduce((acc, curr) => [ ...acc, ...curr ], []);
  edges = edges.map(edge => {
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
  return grafFactory({
    nodes,
    edges,
  });
}
