var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
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
  this.children.push(tempTree);
};

treeMethods.contains = function(data){
  var doesContain = false;
  var treeCrawler = function(node){
    if (node.value === data) {
      doesContain = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children; i++){
        treeCrawler(node.next);
      }
    }
  };
  treeCrawler(list.head);
  return doesContain;
};
