var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childNode = Tree(value);
  if (this.children === undefined) {
    this.children = [childNode];
  } else {
    this.children.push(childNode);
  }
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    if (this.children !== undefined){
      for (var i = 0; i < this.children.length; i++){
        if ( (this.children[i]).contains(target) ){
          return true;
        }
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */