import React from "react";
import { render } from "@testing-library/react";
import WasteRecordCard from "./WasteRecordCard.js";

describe("WasteRecordCard", () => {
  const mockRecord = {
    dateTime: new Date("2024-04-16T12:00:00Z").toISOString(),
    category: "Plastic",
    weight: 2.5
  };

  it("renders with record data", () => {
    const { getByText } = render(<WasteRecordCard record={mockRecord} />);
    
    // Assert that the date and time is rendered correctly
    expect(getByText(/Date and Time: \d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)/i)).toBeInTheDocument();
    
    // Assert that the category is rendered correctly
    expect(getByText("Category: Plastic")).toBeInTheDocument();
    
    // Assert that the weight is rendered correctly
    expect(getByText("Weight: 2.5 kg")).toBeInTheDocument();
  });

  it("renders with proper card styles", () => {
    const { getByTestId } = render(<WasteRecordCard record={mockRecord} />);
    
    // Assert that the card element has proper styles applied
    const cardElement = getByTestId("waste-record-card");
    expect(cardElement).toHaveStyle("margin: 10px");
    expect(cardElement).toHaveStyle("background-color: #4caf50");
    expect(cardElement).toHaveStyle("width: 400px");
  });
});
