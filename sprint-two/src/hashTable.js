var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var pair = [k,v];

 // if storage i is undefined, 
  if (this._storage.get(i) === undefined){ 
  // make a bucket (array) there
    this._storage.set(i, []);
  // push [kv] into bucket
    this._storage.get(i).push(pair);
  }

// if storage i has a bucket,
  if (this._storage.get(i)) {
  // push [kv] into bucket
  this._storage.get(i).push(pair); 
  }

};

HashTable.prototype.retrieve = function(k){
 var i = getIndexBelowMaxForKey(k, this._limit);

 var bucket = this._storage.get(i);

 if (bucket !== undefined) {
  for (var j = 0; j < bucket.length; j++) {
    var pair = bucket[j];
    if (pair[0] === k) {
      return pair[1];
    }
  };
  
 }

 
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
