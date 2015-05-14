var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.count = 0;
  newQueue.head = 0;
  newQueue.tail = 0;
  newQueue.storage = {};

  _.extend(newQueue, queueMethods); 

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.count;
};

queueMethods.enqueue = function(item) {
  this.storage[this.tail] = item;
  this.tail++;
  this.count++; 
};

queueMethods.dequeue = function(){
  if (this.count > 0) {
    var temp = this.storage[this.head];
    this.count--;
    this.head++;
    return temp;
  }
};




