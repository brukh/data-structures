var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var temp = list.head.value;

    list.head = list.head.next;

    return temp;
  };

  list.contains = function(target){
    var temp = list.head;

    while (temp) {
      if (temp.value === target){
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */