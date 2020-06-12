class Heap {
    array = [];
    constructor(comparator) {
        this.compare = comparator;
    }

    insert(val){
        this.array.push(val);
        this.sift_up(this.array.length - 1);
    }

    pop(){
        if (this.array.length) {
            let value = this.array[0];
            [this.array[this.array.length-1], this.array[0]] = [this.array[0], this.array[this.array.length - 1]];
            this.array.pop();
            this.sift_down(0);
            return value;
        }
        return null;
    }

    sift_down(current = 0) {
        let left = 2*current + 1;
        let right = 2*current + 2;
        let selected = current; 

        if (left >= this.array.length) return;

        if (!this.compare(this.array[selected], this.array[left])){
            selected = left;
        }

        if (right < this.array.length && !this.compare(this.array[selected], this.array[right])) {
            selected = right;
        }

        if (selected !== current) {
            [this.array[current], this.array[selected]] = [this.array[selected], this.array[current]];
            this.sift_down(selected);
        }
    }

    sift_up(current){
        let parent = Math.floor((current - 1)/2);
        if (parent < 0) return;

        if (!this.compare(this.array[parent], this.array[current])) {
            [this.array[current], this.array[parent]] = [this.array[parent], this.array[current]];
            this.sift_up(parent);
        }
    }

}

const MinHeap = () => new Heap((a, b) => a < b) 
const MaxHeap = () => new Heap((a, b) => a > b) 

module.exports = {
    MinHeap,
    MaxHeap
}

let test = MaxHeap();
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