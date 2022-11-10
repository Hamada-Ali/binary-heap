// binary Heap
class Heap {
    constructor() {
    this.values = [];    
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    remove() { // always remove the first index || tree root
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
        return max;
        }
    }
    
    // Helper functions
    bubbleUp() {
        let idx = this.values.length - 1;
        let ele = this.values[idx];
        while(idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        let parentEle = this.values[parent];
            if(ele <= parentEle) {break ;}
            // swap
            this.values[parent] = ele;
            this.values[idx] = parentEle;
            idx = parent;
        }
    }
    
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const ele = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > ele) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > ele) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) {
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }
    }
}
// priority queue
class Queue {
    constructor() {
        this.values = [];
    }
    
}
// Nodes of the queue
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
const heap = new Heap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);