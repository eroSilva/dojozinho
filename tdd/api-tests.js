const assert = function (received) {
  const expect = (expected) => {
    const result = received === expected;

    if (result) {
      console.log('OK');
    } else {
      console.warn(`Valor esperado ${expected} e recebido é ${received}`);
    }
  }

  return { expect }
};