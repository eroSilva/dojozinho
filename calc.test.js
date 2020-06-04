const testSum = () => {
  assert(sum(2,3)).expect(5);
}

const testDiv = () => {
  assert(div(6,3)).expect(2);
}

const testDivPerZero = () => {
  assert(div(6,0)).expect(Infinity);
}

const testZeroPerDiv = () => {
  assert(div(0, 6)).expect(0);
}

testSum();
testDiv();
testDivPerZero();
testZeroPerDiv();