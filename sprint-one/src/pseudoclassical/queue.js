var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0;
  this.dequeueCalls = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  if (this.count > 0) {
  var temp = this.storage[0];     
  this.count--;
  this.dequeueCalls++;
  this.storage[0] = this.storage[this.dequeueCalls];
  return temp;
  };
};

Queue.prototype.size = function() {
  return this.count;
};