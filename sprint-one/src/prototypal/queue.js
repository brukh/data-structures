var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.head = 0;
  newQueue.tail = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail] = value;
  this.count++;
  this.tail++;
};

queueMethods.dequeue = function(){
  if (this.count > 0) {
    this.count--;
    var temp = this.storage[this.head];
    this.head++;
    return temp;
  }
};

queueMethods.size = function(){
  return this.count;
};



