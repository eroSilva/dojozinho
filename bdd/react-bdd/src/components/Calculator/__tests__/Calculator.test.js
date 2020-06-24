import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Calculator } from "../Calculator";

describe("Calculator", () => {
  test("should render calculator on display equal 0", () => {
    // arrange
    render(<Calculator />);


    expect(screen.getByTestId('display').value).toEqual("0")
  });

  test("should click button one and modify input value to 1", () => {
    // arrange
    render(<Calculator />);
    const button = screen.getByTestId('button1');

    // act
    fireEvent.click(button)

    // assert
    expect(screen.getByTestId('display').value).toEqual("1")
  });

});