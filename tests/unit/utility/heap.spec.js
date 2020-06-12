const { MaxHeap: maxHeap, MinHeap: minHeap } = require("../../../src/utility/heap");

function getRandomNumberList(n) {
  return new Array(n).fill().map(() => parseInt(Math.random() * 1000));
}

describe('Heap', () => {
  describe('Min Heap', () => {
    let heap;
    beforeEach(() => {
      heap = minHeap();
    });

    it('pop should return null if heap is empty', () => {
      expect(heap.pop()).toBe(null);
      heap.insert(1);
      heap.pop()
      expect(heap.pop()).toBe(null);
    })

    it('sequence execution', () => {
      const randomNumbers = getRandomNumberList(10);
      randomNumbers.forEach((elm, index) => {
        heap.insert(elm);
      });
      randomNumbers.sort((a, b) => a - b);
      const poppedResult = [];
      for (let i = 1; i <= 10; i++) {
        poppedResult.push(heap.pop());
      }
      expect(randomNumbers).toEqual(poppedResult);
    });
  });

  describe('Max Heap', () => {
    let heap;
    beforeEach(() => {
      heap = maxHeap();
    });

    it('pop should return null if heap is empty', () => {
      expect(heap.pop()).toBe(null);
      heap.insert(1);
      heap.pop()
      expect(heap.pop()).toBe(null);
    })

    it('sequence execution', () => {
      const randomNumbers = getRandomNumberList(10);
      randomNumbers.forEach((elm, index) => {
        heap.insert(elm);
      });
      randomNumbers.sort((a, b) => b - a);
      const poppedResult = [];
      for (let i = 1; i <= 10; i++) {
        poppedResult.push(heap.pop());
      }
      expect(randomNumbers).toEqual(poppedResult);
    });
  });
});