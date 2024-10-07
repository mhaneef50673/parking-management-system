import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  test("renders button with children", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(<Button className="custom-class">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("forwards props to button element", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });
});
