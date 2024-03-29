describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.

  it("should be able to add a child to the tree", function() {
    tree.addChild('a');
    expect(tree.children[0].value).toEqual('a');
  });

  it("should be able to add multiple children to the tree", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    expect(tree.children[0].value).toEqual('a');
    expect(tree.children[1].value).toEqual('b');
    expect(tree.children[2].value).toEqual('c');
  });

  it("should be able to find a value in trees using contains()", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');

    expect(tree.contains('b')).toEqual(true);
  });

  it("should be able to handle nested subtrees", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[1].addChild('d');
    tree.children[1].addChild('e');
    tree.children[1].addChild('f');


    expect(tree.children[1].children[0].value).toEqual('d');
    expect(tree.children[1].children[1].value).toEqual('e');
    expect(tree.children[1].children[2].value).toEqual('f');

  });

  it("should be able to find within nested subtrees", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[1].addChild('d');
    tree.children[1].addChild('e');
    tree.children[1].addChild('f');


    expect(tree.contains('b')).toEqual(true);
    expect(tree.children[1].contains('e')).toEqual(true);
    expect(tree.contains('g')).toEqual(false);

  });

  it("should give parent attribute to its children", function() {
    tree.addChild('a');
    expect(tree.children[0].parent).toEqual(tree);
  });

  it("should be able to split trees using removeFromParent()", function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.addChild('c');
    tree.children[1].addChild('d');
    tree.children[1].addChild('e');
    tree.children[1].addChild('f');
    tree.children[1].children[1].addChild('g');
    tree.children[1].children[1].addChild('h');
    var newTree = tree.children[1].removeFromParent();

    expect(tree.children.length).toEqual(2);
    expect(newTree.parent).toEqual(null);
    expect(newTree.children.length).toEqual(3);
  });

  it("should be able to run a function on every node in the tree with traverse()", function() {
    var result = 0;
    var sum = function(value) {
      result += value;
    };

    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[1].addChild(4);
    tree.children[1].addChild(5);
    tree.children[1].addChild(6);
    tree.children[1].children[1].addChild(7);
    tree.children[1].children[1].addChild(8);
    tree.traverse(sum);
    
    expect(result).toEqual(36);
  });
});