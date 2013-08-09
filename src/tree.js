var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.parent = undefined;
  newTree.children = [];

  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  tempTree = makeTree();
  tempTree.value = value;
  tempTree.parent = this;
  this.children.push(tempTree);
};

treeMethods.contains = function(data){
  var doesContain = false;
  var treeCrawler = function(node){
    if (node.value === data) {
      doesContain = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        treeCrawler(node.children[i]);
      }
    }
  };
  treeCrawler(this);
  return doesContain;
};
