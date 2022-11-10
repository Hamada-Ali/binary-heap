// binary Heap
class Heap {
    constructor() {
    this.values = [];    
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
const heap = new Heap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
