var makeBinarySearchTree = function(){
  var newBinarySearchTree = {};
  newBinarySearchTree.value = null;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  for (var key in binarySearchTreeMethods) {
    newBinarySearchTree[key] = binarySearchTreeMethods[key];
  }

  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

};

binarySearchTreeMethods.contains = function(value) {
  
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  
};