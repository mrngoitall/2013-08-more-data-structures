var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value] = true;
};

setPrototype.contains = function(value){
  return this._storage[value] ? true : false;
};

setPrototype.remove = function(value){
  delete this._storage[value];
};
