var HashTable = function(){
  this._limit = 50;
  this._size = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, limit, storage){
  limit = limit || this._limit;
  newStorage = storage || this._storage;
  var i = getIndexBelowMaxForKey(k, limit);
  var thisBucket = newStorage.get(i) || [];
  var pair = [];

  _(thisBucket).each(function(thisPair) {
    if (thisPair[0] === k) {
      pair = thisPair;
      thisPair[1] = v;
    }
  });

  if (!pair.length) {
    pair = [k, v];
    thisBucket.push(pair);
    !storage && this._size++;
  }
  newStorage.set(i, thisBucket);

  // Rebalance tree if more than 75% is used
  if (this._size > (limit * 0.75)) {
    this.reindex(limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var thisBucket = this._storage.get(i) || [];
  var value;
  _(thisBucket).each(function(thisPair) {
    if (thisPair[0] === k)
      value = thisPair[1];
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var thisBucket = this._storage.get(i);
  _(thisBucket).each(function(thisPair, pairIndex) {
    thisPair[0] === k && thisBucket.splice(pairIndex,1);
  });
  if (thisBucket.length === 0) {
    this._size--;
  }
  this._storage.set(i, thisBucket);

  // Rebalance tree if less than 25% is used
  if (this._size < (this._limit * 0.25)) {
    this.reindex(this._limit / 2);
  }
};

HashTable.prototype.reindex = function(newStorageLimit) {
  var htable = this;
  var newHTable = makeLimitedArray(newStorageLimit);
  this._storage.each(function(thisBucket, key, collection) {
    thisBucket && _(thisBucket).each(function(thisPair) {
      htable.insert(thisPair[0],thisPair[1],newStorageLimit,newHTable);
    });
  });
  this._limit = newStorageLimit;
  this._storage = newHTable;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
