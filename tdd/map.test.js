const testMap = () => {
  const arr = [1,2,3];
  const sum = (item) => item + 1;

  describe('--Teste passando [1,2,3] e sum()', function() {
    describe('---Teste 1 deve ter como primeiro item valor igual a 2:', function() {
      assert(map(arr, sum)[0], this.name).expect(2);
    });

    describe('---Teste 2 deve ter como segundo item valor igual a 3:', function() {
      assert(map(arr, sum)[1]).expect(3);
    });

    describe('---Teste 3 deve ter como terceiro item valor igual a 4:', function() {
      assert(map(arr, sum)[2]).expect(4);
    });
  });
}

describe('Teste map():', function() {
  testMap();
});