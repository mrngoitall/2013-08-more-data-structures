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

});