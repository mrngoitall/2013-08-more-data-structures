// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(data){
    if (list.head === null) {
      list.head = makeNode(data);
      list.tail = list.head;
    } else {
      list.head = makeNode(data);

    }
  };

  list.addToTail = function(){
    if (list.head === null) {
      list.head = makeNode(data);
      list.tail = list.head;
    } else {
      var tempNode = makeNode(data);
      tempNode.prev = list.tail;
      list.tail.next = tempNode;
      list.tail = tempNode;
      list.tail.prev = 
    }
  };

  list.removeHead = function(){
  };

  list.removeTail = function(){

  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};
