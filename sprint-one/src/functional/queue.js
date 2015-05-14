var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var head = 0, tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    length++;
    tail++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      var result = storage[head];
      delete storage[head];
      length--;
      head++;

      return result;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
