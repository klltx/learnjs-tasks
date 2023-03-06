let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);
printList2(list);

function printList(list) {
  console.log(list.value);
  
  if(list.next) {
    printList(list.next);
  }
}

function printList2(list) {
  let listItem = list;
  while(listItem) {
    console.log(listItem.value);
    listItem = listItem.next;
  }
}