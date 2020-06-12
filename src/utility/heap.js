class Heap {
    array = [];

    constructor(comparator) {
      this.compare = comparator;
    }

    insert(val) {
      this.array.push(val);
      this.siftUp(this.array.length - 1);
    }

    pop() {
      if (this.array.length) {
        const value = this.array[0];
        [this.array[this.array.length - 1], this.array[0]] = [
          this.array[0], this.array[this.array.length - 1],
        ];
        this.array.pop();
        this.siftDown(0);
        return value;
      }
      return null;
    }

    siftDown(current = 0) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      let selected = current;

      if (left >= this.array.length) return;

      if (!this.compare(this.array[selected], this.array[left])) {
        selected = left;
      }

      if (right < this.array.length && !this.compare(this.array[selected], this.array[right])) {
        selected = right;
      }

      if (selected !== current) {
        [this.array[current], this.array[selected]] = [this.array[selected], this.array[current]];
        this.siftDown(selected);
      }
    }

    siftUp(current) {
      const parent = Math.floor((current - 1) / 2);
      if (parent < 0) return;

      if (!this.compare(this.array[parent], this.array[current])) {
        [this.array[current], this.array[parent]] = [this.array[parent], this.array[current]];
        this.siftUp(parent);
      }
    }
}

const MinHeap = () => new Heap((a, b) => a < b);
const MaxHeap = () => new Heap((a, b) => a > b);

module.exports = {
  MinHeap,
  MaxHeap,
};

const test = MaxHeap();
test.insert(10);
test.insert(0);
test.insert(9);
test.insert(90);
test.insert(4);
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
