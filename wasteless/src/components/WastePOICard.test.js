import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WastePOICard from "./WastePOICard.js";
import { BrowserRouter as Router } from "react-router-dom"; 

describe("WastePOICard", () => {
  const mockPOI = {
    id: 1,
    poi_name: "Test POI",
    address: "123 Test Street",
    poi_postal_code: "12345",
    wasteCategory: "General Waste"
  };

  const mockUser = {
    userName: "testuser"
  };

  it("renders with POI data", () => {
    const { getByText } = render(<Router><WastePOICard poi={mockPOI} user={mockUser} /></Router>);
    
    // Assert that the POI name is rendered correctly
    expect(getByText("Test POI")).toBeInTheDocument();
    
    // Assert that the POI address is rendered correctly
    expect(getByText("123 Test Street")).toBeInTheDocument();
    
    // Assert that the POI postal code is rendered correctly
    expect(getByText("Postal Code: 12345")).toBeInTheDocument();
    
    // Assert that the POI category is rendered correctly
    expect(getByText("Category: General Waste")).toBeInTheDocument();
  });
//Not working
//   it("triggers navigation when card is clicked", () => {
//     const mockNavigate = jest.fn();
//     jest.mock("react-router-dom", () => ({
//       ...jest.requireActual("react-router-dom"),
//       useNavigate: () => mockNavigate
//     }));

//     const { getByText } = render(<Router><WastePOICard poi={mockPOI} user={mockUser} /></Router>);
    
//     // Find and click the card
//     fireEvent.click(getByText("Test POI"));

//     // Assert that the navigation is triggered with the correct URL
//     expect(mockNavigate).toHaveBeenCalledWith(`/wastePOIdetails?username=testuser&poi=1`);
//   });
});