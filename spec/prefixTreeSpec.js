describe("prefixTree", function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = makePrefixTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(prefixTree.addChild).toEqual(jasmine.any(Function));
    expect(prefixTree.contains).toEqual(jasmine.any(Function));
    expect('value' in prefixTree).toBe(true);
  });

  // Add more tests here to test the functionality of prefixTree.

  it("should be able to add a child to the prefixTree", function() {
    prefixTree.addChild('a');
    expect(prefixTree.children[0].value).toEqual('a');
  });

  it("should be able to add multiple children to the prefixTree", function() {
    prefixTree.addChild('a');
    prefixTree.addChild('b');
    prefixTree.addChild('c');

    expect(prefixTree.children[0].value).toEqual('a');
    expect(prefixTree.children[1].value).toEqual('b');
    expect(prefixTree.children[2].value).toEqual('c');
  });

  it("should be able to find a value in prefixTrees using contains()", function() {
    prefixTree.addChild('a');
    prefixTree.addChild('b');
    prefixTree.addChild('c');

    expect(prefixTree.contains('b')).toEqual(true);
  });

  it("should be able to handle nested subprefixTrees", function() {
    prefixTree.addChild('a');
    prefixTree.addChild('b');
    prefixTree.addChild('c');
    prefixTree.children[1].addChild('d');
    prefixTree.children[1].addChild('e');
    prefixTree.children[1].addChild('f');


    expect(prefixTree.children[1].children[0].value).toEqual('d');
    expect(prefixTree.children[1].children[1].value).toEqual('e');
    expect(prefixTree.children[1].children[2].value).toEqual('f');

  });

  it("should be able to find within nested subprefixTrees", function() {
    prefixTree.addChild('a');
    prefixTree.addChild('b');
    prefixTree.addChild('c');
    prefixTree.children[1].addChild('d');
    prefixTree.children[1].addChild('e');
    prefixTree.children[1].addChild('f');


    expect(prefixTree.contains('b')).toEqual(true);
    expect(prefixTree.children[1].contains('e')).toEqual(true);
    expect(prefixTree.contains('g')).toEqual(false);

  });

  it("should give parent attribute to its children", function() {
    prefixTree.addChild('a');
    expect(prefixTree.children[0].parent).toEqual(prefixTree);
  });

  it("should be able to split prefixTrees using removeFromParent()", function() {
    prefixTree.addChild('a');
    prefixTree.addChild('b');
    prefixTree.addChild('c');
    prefixTree.children[1].addChild('d');
    prefixTree.children[1].addChild('e');
    prefixTree.children[1].addChild('f');
    prefixTree.children[1].children[1].addChild('g');
    prefixTree.children[1].children[1].addChild('h');
    var newTree = prefixTree.children[1].removeFromParent();

    expect(prefixTree.children.length).toEqual(2);
    expect(newTree.parent).toEqual(null);
    expect(newTree.children.length).toEqual(3);
  });

  it("should be able to run a function on every node in the prefixTree with traverse()", function() {
    var result = 0;
    var sum = function(value) {
      result += value;
    };

    prefixTree.addChild(1);
    prefixTree.addChild(2);
    prefixTree.addChild(3);
    prefixTree.children[1].addChild(4);
    prefixTree.children[1].addChild(5);
    prefixTree.children[1].addChild(6);
    prefixTree.children[1].children[1].addChild(7);
    prefixTree.children[1].children[1].addChild(8);
    prefixTree.traverse(sum);
    
    expect(result).toEqual(36);
  });
});