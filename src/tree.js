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
  /* // Original solution
  var doesContain = false;
  var treeCrawler = function(node){
    if (node.value === value) {
      doesContain = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        treeCrawler(node.children[i]);
      }
    }
  };
  treeCrawler(this);
  return doesContain; */
  /* // Using each
  var childrenContainValue = false;
  _(this.children).each(function(child) {
    childrenContainValue = childrenContainValue || child.contains(value);
  }
  return this.value === value || childrenContainValue; */
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
  var treeCrawler = function(node){
    callback(node.value);

    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        treeCrawler(node.children[i]);
      }
    }
  };
  treeCrawler(this);
};
