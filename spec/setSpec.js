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

  it("should be able to store numbers", function () {
    set.add(2);
    set.add(3);
    set.add(4);
    set.remove(3);
    expect(set.contains(2)).toEqual(true);
    expect(set.contains(3)).toEqual(false);
  });

  it("should be able to store booleans", function () {
    set.add(true);
    set.add(false);
    set.remove(true);
    expect(set.contains(false)).toEqual(true);
    expect(set.contains(true)).toEqual(false);
  });

  it("should be able to store arrays", function () {
    array1 = [1, 2, 3, 4, 5, 6];
    array2 = ["a", 1, "b", 2, "c", 3];
    set.add(array1);
    set.add(array2);
    set.remove(array1);
    expect(set.contains(array2)).toEqual(true);
    expect(set.contains(array1)).toEqual(false);
  });

  it("should be able to store objects and functions", function () {
    obj1 = {"a": 1, "b": 2, "c": 3, "d, 4": 4};
    obj2 = function() {
      return "hello";
    };
    set.add(obj1);
    set.add(obj2);
    expect(set.contains(obj1)).toEqual(true);
    expect(set.contains(obj2)).toEqual(true);
    set.remove(obj1);
    expect(set.contains(obj2)).toEqual(true);
    expect(set.contains(obj1)).toEqual(false);
  });
});