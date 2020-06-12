const filter = (arr, fn) => {
  const newArr = [];

  forEach(arr, (item, index, arr) => {
    const result = fn(item, index, arr);
    if (result) {
      newArr.push(item);
    }
  });

  return newArr;
}