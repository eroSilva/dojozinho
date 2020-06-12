const testForEach = () => {
  let start = 0;
  const arr = [1, 2, 3];
  const sum = () => start++;

  forEach(arr, sum);

  describe('--Dado um array [1,2,3], uma variável inicial com valor 0 e passando uma função que incrementa a variável inicial, deve retornar 3: ', function() {
    assert(start).expect(arr.length);
  });
}

describe('Teste forEach():', function() {
  testForEach();
});