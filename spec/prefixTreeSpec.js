describe("T9prefixTree", function() {
  var prefixTree = makePrefixTree();

  // load in our (very long) dictionary
  for (var i = 0; i < wordlist.length; i++) {
    prefixTree.addWord(wordlist[i]);
  }

  // beforeEach(function() {
  //   prefixTree = makePrefixTree();
  // });

  it("should have methods named 'addWord', 'findWord', and a property named 'number'", function() {
    expect(prefixTree.addWord).toEqual(jasmine.any(Function));
    expect(prefixTree.findWord).toEqual(jasmine.any(Function));
    expect('number' in prefixTree).toBe(true);
  });

  // Add more tests here to test the functionality of prefixTree.

  it("should be able to add a word to the prefixTree", function() {
    prefixTree.addWord('supercalifragilisticexpialidocious');
    expect(prefixTree.findWord('787372254')).toEqual(['supercalifragilisticexpialidocious']);
  });

  it("should be able to add words with uppercase letters", function() {
    prefixTree.addWord('HaCkReAcToR');

    expect(prefixTree.findWord('422573')).toContain('hackreactor');
  });

  it("should be able to find a value in prefixTrees using findWord()", function() {
    expect(prefixTree.findWord('422537')).toContain("hacker");
    expect(prefixTree.findWord('7872923779')).toEqual(["strawberry"]);
  });

  it("should be able to give suggestions for partial word entry using findWord()", function() {
    expect(prefixTree.findWord('8368873')).toEqual(["venture", "ventured", "venturer", "ventures", "venturers"]);
    expect(prefixTree.findWord('228346')).toEqual(["category", "categoric", "categories", "categorise", "categorize"]);
  });

});