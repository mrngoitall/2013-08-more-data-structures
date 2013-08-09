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
  if (!this.value) {
    this.value = value;
  } else {
    var newNode = makeBinarySearchTree();
    newNode.value = value;
    var binaryTreeCrawler = function(node) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          binaryTreeCrawler(node.left);
        }
      } else if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          binaryTreeCrawler(node.right);
        }
      }
    };
    binaryTreeCrawler(this);
  }
};

binarySearchTreeMethods.contains = function(value) {
  var binaryTreeCrawler = function(node) {
    if (node.value === value) {
      return true;
    } else if (value < node.value && node.left) {
      return binaryTreeCrawler(node.left);
    } else if (value > node.value && node.right) {
      return binaryTreeCrawler(node.right);
    } else {
      return false;
    }
  };
  return binaryTreeCrawler(this);
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  var binaryTreeCrawler = function(node) {
    callback(node.value);
    node.left && binaryTreeCrawler(node.left);
    node.right && binaryTreeCrawler(node.right);
  };
  binaryTreeCrawler(this);
};