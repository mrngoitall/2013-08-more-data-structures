describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList

  it("should be able to add a value to tail", function() {
    linkedList.addToTail('a');
    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should have meaningful head and tail properties", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');

    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.tail.value).toEqual('b');
  });

  it("should return items in the proper order", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');

    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should be able to find values in the list with contains()", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');

    expect(linkedList.contains('b')).toEqual(true);
    expect(linkedList.contains('d')).toEqual(false);
  });

});