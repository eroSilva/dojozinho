import React, { useState } from "react";
import { Button } from "./Button";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const behaviorClick = (value) => {
    if (value === 'clear') {
      setDisplayValue(0);
      return;
    }

    if (value === '=') {
      setDisplayValue(eval(displayValue));
      return;
    }

    if (displayValue === "0") {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(displayValue.toString() + value.toString());
  };

  return (
    <>
      <input type="text" data-testid="display" value={displayValue} />
      <Button data-testid="button0" onClick={() => behaviorClick(0)}>
        0
      </Button>
      <Button data-testid="button1" onClick={() => behaviorClick(1)}>
        1
      </Button>
      <Button data-testid="button2" onClick={() => behaviorClick(2)}>
        2
      </Button>
      <Button data-testid="button3" onClick={() => behaviorClick(3)}>
        3
      </Button>
      <Button data-testid="buttonPlus" onClick={() => behaviorClick('+')}>
        +
      </Button>
      <Button data-testid="buttonSubtraction" onClick={() => behaviorClick('-')}>
        -
      </Button>
      <Button data-testid="buttonDivision" onClick={() => behaviorClick('/')}>
        /
      </Button>
      <Button data-testid="buttonEqual" onClick={() => behaviorClick('=')}>
        =
      </Button>
      <Button data-testid="buttonClear" onClick={() => behaviorClick('clear')}>
        Limpar
      </Button>
    </>
  );
};

export { Calculator };




