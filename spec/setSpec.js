describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should be able to add string values to the set and use contains to find them", function () {
    set.add("Hello");
    expect(set.contains("Hello")).toEqual(true);
    expect(set.contains("Goodbye")).toEqual(false);
  });

  it("should be able to remove string values from the set without changing other values", function () {
    set.add("Hello");
    set.add("Hi");
    set.remove("Hello");
    set.remove("Goodbye");
    expect(set.contains("Hello")).toEqual(false);
    expect(set.contains("Hi")).toEqual(true);
  });
});