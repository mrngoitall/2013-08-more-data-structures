var makeBinarySearchTree = function(){
  var newBinarySearchTree = {}
  newBinarySearchTree.value = null;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }

  return newTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

};

binarySearchTreeMethods.contains = function(value) {
  
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  
};