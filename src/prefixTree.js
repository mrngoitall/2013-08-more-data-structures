var makePrefixTree = function(){
  var newPrefixTree = {};
  newPrefixTree.alphabetMap = {
    'a':2, 'b':2, 'c':2,
    'd':3, 'e':3, 'f':3,
    'g':4, 'h':4, 'i':4,
    'j':5, 'k':5, 'l':5,
    'm':6, 'n':6, 'o':6,
    'p':7, 'q':7, 'r':7, 's':7,
    't':8, 'u':8, 'v':8,
    'w':9, 'x':9, 'y':9, 'z':9
  };
  newPrefixTree.number = null;
  newPrefixTree.parent = null;
  newPrefixTree.children = [];
  newPrefixTree.words = [];

  for (var key in prefixTreeMethods) {
    newPrefixTree[key] = prefixTreeMethods[key];
  }
  return newPrefixTree;
};

var prefixTreeMethods = {};

prefixTreeMethods.addChild = function(number){
  var tempTree = makePrefixTree();
  tempTree.number = number;
  tempTree.parent = this;
  return tempTree;
};

prefixTreeMethods.addWord = function(word, fullWord){
  fullWord = fullWord || word.toLowerCase();
  if (word) {
    var digit = this.alphabetMap[word.charAt(0).toLowerCase()];
    if (!this.children[digit]) this.children[digit] = this.addChild(digit);
    this.children[digit].addWord(word.substring(1), fullWord);
  } else {
    if (!this.children[1]) this.children[1] = this.addChild(1);
    this.children[1].words.push(fullWord);
  }
};

prefixTreeMethods.findWord = function(numberString) {
  var numbers = numberString.split('');
  var treeCrawler = function(node) {
    if (numbers.length) {
      return node ? treeCrawler(node.children[numbers.shift()]) : makePrefixTree();
    }
    return node || makePrefixTree();
  };

  var queue = [treeCrawler(this)];
  var results = [];

  while (queue.length && results.length < 5) {
    var node = queue.shift();
    var resultPos = 0;
    if (node && node.children[1]) {
      while (results.length < 5 && resultPos < node.children[1].words.length) {
        results.push(node.children[1].words[resultPos]);
        resultPos++;
      }
    }
    for (var i = 0; i < node.children.length; i++) {
      node.children[i] && queue.push(node.children[i]);
    }
  }
  return results;
};
