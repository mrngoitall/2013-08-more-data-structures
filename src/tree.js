var makeTree = function(){
  var newTree = {};
  newTree.value = null;
  newTree.parent = null;
  newTree.children = [];

  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tempTree = makeTree();
  tempTree.value = value;
  tempTree.parent = this;
  this.children.push(tempTree);
};

treeMethods.contains = function(value){
  // Using reduce
  return _(this.children).reduce(function(childrenContainValue, child){
    return childrenContainValue || child.contains(value);
  }, this.value === value);
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  return this;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  _(this.children).each(function(child) {
    child && child.traverse(callback);
  });
};
