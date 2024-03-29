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
      var tempNode = makeNode(data);
      tempNode.next = list.head;
      list.head.prev = tempNode;
      list.head = tempNode;
    }
  };

  list.addToTail = function(data){
    if (list.head === null) {
      list.head = makeNode(data);
      list.tail = list.head;
    } else {
      var tempNode = makeNode(data);
      tempNode.prev = list.tail;
      list.tail.next = tempNode;
      list.tail = tempNode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
      var tempNode = list.head;
      if (list.head.next) list.head.next.prev = null;
      list.head = list.head.next;
      return tempNode.value;
    }
  };

  list.removeTail = function(){
    if (list.tail !== null) {
      var tempNode = list.tail;
      if (list.tail.prev) list.tail.prev.next = null;
      list.tail = list.tail.prev;
      return tempNode.value;
    }
  };

  list.contains = function(value){
    return (this.head && this.head.contains(value)) || false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  node.contains = function(value) {
    return this.value === value || this.next && this.next.contains(value);
  }
  return node;
};
