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
  var binaryTreeDepthCrawler = function(node, mode) {
    var depth = 1;
    if (node.left !== null && node.right !== null) {
      if (mode === 'max') {
        depth = depth + Math.max(binaryTreeDepthCrawler(node.left,'max'),binaryTreeDepthCrawler(node.right,'max'));
      } else depth = depth + Math.min(binaryTreeDepthCrawler(node.left),binaryTreeDepthCrawler(node.right));
    } else if (node.right !== null) {
      depth += binaryTreeDepthCrawler(node.right);
    } else if (node.left !== null) {
      depth += binaryTreeDepthCrawler(node.left);
    }
    return depth;
  };
  var maxDepth = binaryTreeDepthCrawler(this, 'max');
  console.log('max: '+ maxDepth);
  var minDepth = binaryTreeDepthCrawler(this, 'min');
  console.log('min: '+ minDepth);
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

binarySearchTreeMethods.breadthFirstLog = function(callback) {
  var queue = [this];
  while(queue.length) {
 //   debugger;
    node = queue.shift();
    callback(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
};

binarySearchTreeMethods.rebalance = function() {
  // Convert the tree to an array
  var treeArray = [];
  var pushIntoArray = function(value) {
    treeArray.push(value);
  };
  this.breadthFirstLog(pushIntoArray);
  // Sort the array and convert it back into a tree
  treeArray.sort();
  var midpoint = Math.ceil(treeArray.length/2);
  this.left = null;
  this.right = null;
  this.value = null;
  this.insert(treeArray[midpoint]);
  for (var i = 0; midpoint-i > 0 || midpoint+i < treeArray.length; i++) {
    midpoint-i > 0 && this.insert(treeArray[midpoint-i]);
    midpoint+i < treeArray.length && this.insert(treeArray[midpoint+i]);
  }
};