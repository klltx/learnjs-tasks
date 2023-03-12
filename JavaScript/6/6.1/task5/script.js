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
  if(list.next) {
    printList(list.next);
  }
  
  console.log(list.value);
}

function printList2(list) {
  let listItem = list;
  const listValues = [];
  while(listItem) {
    listValues.push(listItem.value);
    listItem = listItem.next;
  }

  listValues.reverse().forEach((v) => { console.log(v) });
}