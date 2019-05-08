
class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.reorder();
  }

  pop() {
    return this.items.pop();
  }

  reorder() {
    this.items.sort(this.comparator);
  }

  get length() {
    return this.items.length;
  }
}

module.exports = {
  PriorityQueue,
};
