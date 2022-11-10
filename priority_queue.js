// binary Heap
class priorityQueue {
    constructor() {
    this.values = [];    
    }
    insert(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
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
            if(ele.priority <= parentEle.priority) {break ;}
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
                if(leftChild.priority > ele.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority > ele.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
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

// Nodes of the queue
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
const q = new priorityQueue();

q.insert("find", 1);insert("gun shoted", 5);insert("feel bad", 2);
