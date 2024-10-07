import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ParkingSpot from "./index";

describe("ParkingSpot Component", () => {
  test("renders without crashing", () => {
    render(
      <ParkingSpot
        spot={1}
        vehicle={null}
        onRemove={() => {}}
        currentTime={new Date()}
      />,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("displays correct information when props are passed", () => {
    render(
      <ParkingSpot
        spot={1}
        vehicle={{
          licensePlate: "vehicle1",
          spot: 3,
          parkedAt: new Date(),
        }}
        onRemove={() => {}}
        currentTime={new Date()}
      />,
    );
    expect(screen.getByText("vehicle1")).toBeInTheDocument();
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(
      <ParkingSpot
        spot={1}
        vehicle={{
          licensePlate: "vehicle1",
          spot: 3,
          parkedAt: new Date(),
        }}
        onRemove={handleClick}
        currentTime={new Date()}
      />,
    );

    fireEvent.mouseOver(screen.getByTestId("vehicle1"));

    await waitFor(() => {
      expect(screen.getByTestId("remove-vehicle1")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId("remove-vehicle1"));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
