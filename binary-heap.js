// binary Heap
class Heap {
  constructor() {
    this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
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
}

const heap = new Heap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
