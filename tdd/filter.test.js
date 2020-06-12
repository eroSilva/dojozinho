const testFilter = () => {
  const arr = [1,2,3,4];
  const numPar = (item) => item % 2 === 0;

  describe('--Teste passando [1,2,3,4] e numPar():', function() {
    describe('---Teste 1 deve ter como primeiro item valor igual a 2:', function() {
      assert(filter(arr, numPar)[0]).expect(2);
    });
    describe('---Teste 2 deve ter como segundo item valor igual a 4:', function() {
      assert(filter(arr, numPar)[1]).expect(4);
    });
  });
  
  
}

describe('Teste filter():', function() {
  testFilter();
});


// filter(array, function comparator(item, index, array) {})