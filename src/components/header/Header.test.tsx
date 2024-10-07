import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Header Component", () => {
  const mockToggleTheme = jest.fn();

  test("renders Header with logo and title", () => {
    render(<Header toggleTheme={mockToggleTheme} isDarkTheme={false} />);

    expect(screen.getByText("ParkEase")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("displays SunIcon when isDarkTheme is true", () => {
    render(<Header toggleTheme={mockToggleTheme} isDarkTheme={true} />);

    const sunIcon = screen.getByTestId("sun-icon");
    expect(sunIcon).toHaveClass("h-[1.2rem] w-[1.2rem]");
  });

  test("displays MoonIcon when isDarkTheme is false", () => {
    render(<Header toggleTheme={mockToggleTheme} isDarkTheme={false} />);

    const moonIcon = screen.getByTestId("moon-icon");
    expect(moonIcon).toHaveClass("h-[1.2rem] w-[1.2rem]");
  });

  test("calls toggleTheme function when button is clicked", () => {
    render(<Header toggleTheme={mockToggleTheme} isDarkTheme={false} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
