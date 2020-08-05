import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  test("should render component", () => {
    // arrange
    const textbutton = "Teste de botao";
    render(<Button> {textbutton} </Button>);

    // act

    // assert
    expect(screen.queryByText(textbutton)).toBeInTheDocument();
  });

  test("should invoke callback function", () => {
    // arrange
    const textbutton = "Teste de botao";
    const fn = jest.fn();
    render(<Button onClick={fn}> {textbutton} </Button>);

    // act
    fireEvent.click(screen.queryByText(textbutton));

    // assert
    expect(fn).toBeCalled();
  });

  test("should have attribute data-testeid", () => {
    // arrange
    const buttonTestId = "Button";
    render(<Button data-testid={buttonTestId}> </Button>);

    // act

    // assert
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  });
});
