
const util = require('util');

let wasCalled;

wasCalled = false;

process.on('exit', () => {
  if(wasCalled) {
    process.stdout.write('\n');
  }
});

module.exports = {
  print,
};

function print(toPrint) {
  wasCalled = true;
  return ((typeof toPrint) === 'string')
    ? printStr(toPrint)
    : printObj(toPrint) ;
}

function printObj(obj) {
  let toPrint;
  toPrint = util.inspect(obj, {
    showHidden: false,
    depth: null,
  });
  return process.stdout.write(`\n${toPrint}`);
}

function printStr(str) {
  return process.stdout.write(`\n${str}`);
}
