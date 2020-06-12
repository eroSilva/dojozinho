const testSum = () => {
  describe('--Teste sum() passando 2 e 3:', function() {
    assert(sum(2,3)).expect(5);
  });
}

const testDiv = () => {
  describe('--Teste div() passando 6 e 3:', function() {
    assert(div(6,3)).expect(2);
  });
}

const testDivPerZero = () => {
  describe('--Teste divPerZero() passando 6 e 0:', function() {
    assert(div(6,0)).expect(Infinity);
  });
}

const testZeroPerDiv = () => {
  describe('--Teste sum() passando 2 e 3:', function() {
    assert(div(0, 6)).expect(0);
  });
}

describe('Teste do calc', function() {
  testSum();
  testDiv();
  testDivPerZero();
  testZeroPerDiv();
})
