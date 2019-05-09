
const  mockQueueData = [
  [ 'c', 2 ],
  [ 'd', 3 ],
  [ 'b', 1 ],
  [ 'f', 5 ],
  [ 'e', 4 ],
  [ 'a', 0 ],
  [ 'h', 7 ],
  [ 'g', 6 ],
  [ 'i', 8 ],
  [ 'l', 11 ],
  [ 'k', 10 ],
  [ 'q', 16 ],
  [ 'n', 13 ],
  [ 'j', 9 ],
  [ 'o', 14 ],
  [ 'r', 17 ],
  [ 'y', 24 ],
  [ 'x', 23 ],
  [ 'm', 12 ],
  [ 'p', 15 ],
  [ 'u', 20 ],
  [ 'z', 25 ],
  [ 'w', 22 ],
  [ 't', 19 ],
  [ 's', 18 ],
  [ 'v', 21 ],
].map(pair => getMockQueueItem(pair[0], pair[1]));

module.exports = {
  mockQueueData,
  comparator,
};

function getMockQueueItem(key, val) {
  return {
    key,
    val,
  };
}

function comparator(a, b) {
  if(a.val < b.val) {
    return 1;
  } else if(a.val > b.val) {
    return -1;
  }
  return 0;
}
