var HashTable = function(){
  this._limit = 10;
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

HashTable.prototype.insert = function(k, v, limit){
  limit = limit || this._limit;
  var i = getIndexBelowMaxForKey(k, limit);
  console.log(i);
  var thisBucket = this._storage.get(i);
  var updated = false;
  if (!thisBucket) {
    thisBucket = [];
    thisBucket[0] = k;
    thisBucket[1] = v;
    this._size++;
  } else {
    for (var x = 0; x < thisBucket.length; x += 2) {
      if (thisBucket[x] === k) {
        thisBucket[x + 1] = v;
        updated = true;
      }
    }
     if (!updated) {
       thisBucket.push(k);
       thisBucket.push(v);
     }
  }
  if (this._size > (limit * 0.75)) {
    this.reindex(limit * 2);
  }
  this._storage.set(i, thisBucket);
 // debugger;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var thisBucket = this._storage.get(i);
  var value;
  for (var x = 0; x < thisBucket.length; x += 2) {
    if (thisBucket[x] === k) {
      value = thisBucket[x + 1];
    }
  }
  return value;
};

HashTable.prototype.remove = function(k, limit){
  limit = limit || this._limit;
  var i = getIndexBelowMaxForKey(k, limit);
  var thisBucket = this._storage.get(i);
    for (var x = 0; x < thisBucket.length; x += 2) {
      if (thisBucket[x] === k) {
        thisBucket.splice(x, 2);
      }
  }
  if (thisBucket.length === 0) {
    this._size--;
  }
  if (this._size < (limit * 0.25)) {
    this.reindex(limit / 2);
  }
  this._storage.set(i, thisBucket);
};

HashTable.prototype.reindex = function(newStorageLimit) {
  var htable = this;
  this._storage.each(function(thisBucket, key, collection) {
    if (thisBucket) {
      for (var x = 0; x < thisBucket.length; x += 2) {
        console.log(htable);
        htable.insert(thisBucket[x],thisBucket[x+1],newStorageLimit);
        htable.remove(thisBucket[x]);
      }
    }
  });
  this._limit = newStorageLimit;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
