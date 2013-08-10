var makePrefixTree = function(){
  var newPrefixTree = {};
  var alphabetMap = {
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
  tempTree = makePrefixTree();
  tempTree.number = number;
  tempTree.parent = this;
  this.children.push(tempTree);
};

prefixTreeMethods.addWord = function(word){
  tempTree = makePrefixTree();
  tempTree.number = number;
  tempTree.parent = this;
  this.children.push(tempTree);
};

prefixTreeMethods.contains = function(data){
  var doesContain = false;
  var treeCrawler = function(node){
    if (node.number === data) {
      doesContain = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        treeCrawler(node.children[i]);
      }
    }
  };
  treeCrawler(this);
  return doesContain;
};

prefixTreeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  return this;
};

prefixTreeMethods.traverse = function(callback) {
  var treeCrawler = function(node){
    callback(node.number);

    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++){
        treeCrawler(node.children[i]);
      }
    }
  };
  treeCrawler(this);
};
