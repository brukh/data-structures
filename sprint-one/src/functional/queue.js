var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; // amount of items in queue
  var head = 0; // position of first item in queue
  var tail = 0; // next open position at end of queue

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value; // value is inserted at end of queue
    length++; // size of queue increases
    tail++; // tail increases to indicate next open slot
  };

  someInstance.dequeue = function(){
    if (length > 0) { 
      var result = storage[head]; 
      delete storage[head]; // remove item from queue
      length--; // size decreases because element is removed
      head++; // head moves to next element in line

      return result;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};