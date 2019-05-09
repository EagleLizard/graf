
const { expect } = require('chai');

const { PriorityQueue } = require('../graf/priority-queue');

const {
  mockQueueData,
  comparator,
} = require('./priority-queue-mocks');

describe('Priority Queue Tests', () => {
  it('Tests shuffled data pops off the queue correctly', () => {
    let pq, popped, poppedStr;
    pq = new PriorityQueue(comparator);
    mockQueueData.forEach(qData => {
      pq.push(qData);
    });
    popped = [];
    while(pq.length) {
      popped.push(pq.pop());
    }
    poppedStr = popped.map(qData => qData.key).join('');
    expect(poppedStr).to.equal('abcdefghijklmnopqrstuvwxyz');
  });
});
