const assert = function (received) {
  const expect = (expected) => {
    const result = received === expected;

    if (result) {
      console.log(`%c OK`, 'color: green;');
      console.log(`%c `, 'color: green;');
    } else {
      console.error(`%c Valor esperado ${expected} e recebido é ${received}`, 'color: red;');
    }

    return result
  }

  return { expect }
};

const describe = (message, fn) => {
  console.log(message);
  fn();
};