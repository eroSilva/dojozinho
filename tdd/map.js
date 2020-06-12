function map(arr, fn) {
  let newArr = [];

  forEach(arr, (item, index, arr) => {
    newArr.push(fn(item, index, arr));
  });

  return newArr;
}