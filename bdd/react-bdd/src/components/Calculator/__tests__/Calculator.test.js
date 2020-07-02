import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Calculator } from "../Calculator";

describe("Calculator", () => {
  describe("Display", () => {
    it("when render calculator should show 0", () => {
      // arrange
      render(<Calculator />);

      // assert
      expect(screen.getByTestId('display').value).toEqual("0")
    });

    it("when click button 1 should show 1", () => {
      // arrange
      render(<Calculator />);
      const button = screen.getByTestId('button1');

      // act
      fireEvent.click(button)

      // assert
      expect(screen.getByTestId('display').value).toEqual("1")
    });

    it("when click button + should show +", () => {
      // arrange
      render(<Calculator />);
      const button = screen.getByTestId('buttonPlus');

      // act
      fireEvent.click(button)

      // assert
      expect(screen.getByTestId('display').value).toEqual("+")
    });

    it("when click button 1, + and 1 again, should show 1+1", () => {
      // arrange
      render(<Calculator />);
      const buttonPlus = screen.getByTestId('buttonPlus');
      const buttonOne = screen.getByTestId('button1');

      // act
      fireEvent.click(buttonOne)
      fireEvent.click(buttonPlus)
      fireEvent.click(buttonOne)

      // assert
      const buttonTwo = screen.getByTestId('button2');
      expect(screen.getByTestId('display').value).toEqual("1+1")
    });
  })

  describe("Clear", () => {
    it("when click button clear should change display to 0", () => {
      // arrange
      render(<Calculator />);
      const buttonOne = screen.getByTestId('button1');
      const buttonTwo = screen.getByTestId('button2');
      const buttonClear = screen.getByTestId('buttonClear');

      // act
      fireEvent.click(buttonOne)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonClear)

      // assert
      expect(screen.getByTestId('display').value).toEqual("0")
    });
  })

  describe("Addition", () => {
    it("when click button 1, +, 1 and = should display 2", () => {
      // arrange
      render(<Calculator />);
      const buttonPlus = screen.getByTestId('buttonPlus');
      const buttonTwo = screen.getByTestId('button2');
      const buttonOne = screen.getByTestId('button1');
      const buttonEqual = screen.getByTestId('buttonEqual');

      // act
      fireEvent.click(buttonOne)
      fireEvent.click(buttonPlus)
      fireEvent.click(buttonOne)
      fireEvent.click(buttonEqual)

      // assert
      expect(screen.getByTestId('display').value).toEqual("2")
    });

    it("when click button 1, +, 2, =, +, 3 and = should display 6", () => {
      // arrange
      render(<Calculator />);
      const buttonOne = screen.getByTestId('button1');
      const buttonTwo = screen.getByTestId('button2');
      const buttonThree = screen.getByTestId('button3');
      const buttonPlus = screen.getByTestId('buttonPlus');
      const buttonEqual = screen.getByTestId('buttonEqual');
      // act
      fireEvent.click(buttonOne)
      fireEvent.click(buttonPlus)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)
      fireEvent.click(buttonPlus)
      fireEvent.click(buttonThree)
      fireEvent.click(buttonEqual)
  
      expect(screen.getByTestId('display').value).toEqual("6")
    });
  })

  describe("Subtraction", () => {
    it("when click button 1 , - , 1 should = 0", () => {
      // arrange
      render(<Calculator />);
      const buttonOne = screen.getByTestId('button1');
      const buttonSubtraction = screen.getByTestId('buttonSubtraction');
      const buttonEqual = screen.getByTestId('buttonEqual');

  
      // act
      fireEvent.click(buttonOne)
      fireEvent.click(buttonSubtraction)
      fireEvent.click(buttonOne)
      fireEvent.click(buttonEqual)
  
      // assert
      expect(screen.getByTestId('display').value).toEqual("0")
    });
  })

  describe("Division", () => {
    it('when click button 2 / 2 should return 1', () => {
      // arrange
      render(<Calculator />);
      const buttonTwo = screen.getByTestId('button2');
      const buttonDivision = screen.getByTestId('buttonDivision');
      const buttonEqual = screen.getByTestId('buttonEqual');

      // act
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonDivision)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)

      // assert
      expect(screen.getByTestId('display').value).toEqual("1")
    });
    
    it('when click button 0 / 2 should return 0', () => {
      // arrange
      render(<Calculator />);
      const buttonZero = screen.getByTestId('button0');
      const buttonTwo = screen.getByTestId('button2');
      const buttonDivision = screen.getByTestId('buttonDivision');
      const buttonEqual = screen.getByTestId('buttonEqual');

      // act
      fireEvent.click(buttonZero)
      fireEvent.click(buttonDivision)
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonEqual)

      // assert
      expect(screen.getByTestId('display').value).toEqual("0")
    });

    it('when click button 2 / 0 should return Infinity', () => {
      // arrange
      render(<Calculator />);
      const buttonZero = screen.getByTestId('button0');
      const buttonTwo = screen.getByTestId('button2');
      const buttonDivision = screen.getByTestId('buttonDivision');
      const buttonEqual = screen.getByTestId('buttonEqual');

      // act
      fireEvent.click(buttonTwo)
      fireEvent.click(buttonDivision)
      fireEvent.click(buttonZero)
      fireEvent.click(buttonEqual)

      // assert
      expect(screen.getByTestId('display').value).toEqual("Infinity")
    });
  })
});