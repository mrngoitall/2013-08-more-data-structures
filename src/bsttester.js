var binarySearchTreeTestSetup = function(tree, array) {
  for (var i = 0; i < 1000000; i++) {
    var randomNo = Math.floor(Math.random() * 1000000)
    tree.insert(randomNo);
    array[i] = randomNo;
  }
}

var findClosest = function(tree, value) {
  var closest = tree.value;
  var binaryTreeCrawler = function(node) {
    if (Math.abs(node.value - value) < (Math.abs(closest - value))) {
      closest = node.value;
    }
    node.left && binaryTreeCrawler(node.left);
    node.right && binaryTreeCrawler(node.right);
  }
  binaryTreeCrawler(tree);
  return closest;
}

var findClosestArray = function (array, value) {
  var closest = array[0]
  for (var i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - value) < (Math.abs(closest - value))) {
      closest = array[i];
    }
  }
  return closest;
}

var myTree = makeBinarySearchTree();
var myArray = [];
binarySearchTreeTestSetup(myTree, myArray);

