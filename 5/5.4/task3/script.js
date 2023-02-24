let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ?

/*
контекстом this будет массив arr, поэтому выведется сам массив
*/