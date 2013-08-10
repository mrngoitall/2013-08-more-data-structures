describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
 it("should be able to add a node to the binarySearchTree", function() {
    binarySearchTree.insert('5');
    expect(binarySearchTree.value).toEqual('5');
 });

  it("should be able to add multiple children in proper order to the binarySearchTree", function() {
    binarySearchTree.insert('5');
    binarySearchTree.insert('2');
    binarySearchTree.insert('6');

    expect(binarySearchTree.value).toEqual('5');
    expect(binarySearchTree.left.value).toEqual('2');
    expect(binarySearchTree.right.value).toEqual('6');
  });

  it("should be able to find a value in trees using contains()", function() {
    binarySearchTree.insert('5');
    binarySearchTree.insert('2');
    binarySearchTree.insert('6');

    expect(binarySearchTree.contains('2')).toEqual(true);
  });

  it("should be able to handle nested subtrees", function() {
    binarySearchTree.insert('5');
    binarySearchTree.insert('2');
    binarySearchTree.insert('6');
    binarySearchTree.insert('4');
    binarySearchTree.insert('1');
    binarySearchTree.insert('9');


    expect(binarySearchTree.right.right.value).toEqual('9');
    expect(binarySearchTree.left.right.value).toEqual('4');
    expect(binarySearchTree.left.left.value).toEqual('1');

  });

  it("should be able to find within nested subtrees", function() {
    binarySearchTree.insert('5');
    binarySearchTree.insert('2');
    binarySearchTree.insert('6');
    binarySearchTree.insert('4');
    binarySearchTree.insert('1');
    binarySearchTree.insert('9');


    expect(binarySearchTree.contains('2')).toEqual(true);
    expect(binarySearchTree.contains('5')).toEqual(true);
    expect(binarySearchTree.contains('9')).toEqual(true);
    expect(binarySearchTree.contains('7')).toEqual(false);

  });

  it("should be able to run a function on every node in the tree with depthFirstLog()", function() {
    var result = [];
    var treeCrawler = function(value) {
      result.push(value);
    };

    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    binarySearchTree.depthFirstLog(treeCrawler);
    expect(result).toEqual([5,2,1,4,6,9]);
  });

  it("should be able to run a function on every node in the tree with breadthFirstLog()", function() {
    var result = [];
    var treeCrawler = function(value) {
      result.push(value);
    };

    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(treeCrawler);
    expect(result).toEqual([5,2,6,1,4,9]);
  });

});