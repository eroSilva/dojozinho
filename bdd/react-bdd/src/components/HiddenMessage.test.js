import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { HiddenMessage } from "./HiddenMessage";

describe("HiddenMessage", () => {
  test("should not render message component", () => {
    // arrange
    const testMessage = "Test Message";
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // assert
    expect(screen.queryByText(testMessage)).toBeNull();
  });

  test("should render hidden message component", () => {
    // arrange
    const testMessage = "Test Message";
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // act
    fireEvent.click(screen.getByLabelText(/show/i));

    // assert
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
