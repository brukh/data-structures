var Graph = function(){
  this.nodes = {}; 
};

Graph.prototype.addNode = function(val){
  var newNode = new Gnode(val);
  this.nodes[val] = newNode;
};

Graph.prototype.contains = function(val){
  return val in this.nodes;
};

Graph.prototype.removeNode = function(val){
  delete this.nodes[val];
};

Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal){
  // vars for actual nodes
  var fromNode = this.nodes[fromNodeVal];
  var toNode = this.nodes[toNodeVal];

  return (toNodeVal in fromNode.edges) && (fromNodeVal in toNode.edges);
};

Graph.prototype.addEdge = function(fromNodeVal, toNodeVal){

  // vars for actual nodes
  var fromNode = this.nodes[fromNodeVal];
  var toNode = this.nodes[toNodeVal];
  
  // access fromNodes edges{} and insert a ref to toNode
  fromNode.edges[toNodeVal] = toNode;
  toNode.edges[fromNodeVal] = fromNode;
};

Graph.prototype.removeEdge = function(fromNodeVal, toNodeVal){
  var fromNode = this.nodes[fromNodeVal];
  var toNode = this.nodes[toNodeVal];

  delete fromNode.edges[toNodeVal];
  delete toNode.edges[fromNodeVal];

};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key].value)
  }
};

var Gnode = function(value){
  this.value = value;
  this.edges = {};
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



