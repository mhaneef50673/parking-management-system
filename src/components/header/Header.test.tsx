import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Header Component", () => {
  test("renders Header with logo and title", () => {
    render(<Header />);

    expect(screen.getByText("ParkEase")).toBeInTheDocument();
  });
});
