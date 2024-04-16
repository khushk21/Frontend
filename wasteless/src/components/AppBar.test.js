import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AppBarComponent from "./AppBar.js";
import { BrowserRouter as Router } from "react-router-dom"; 

// Mocking the @mui/material IconButton and HomeIcon
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  IconButton: jest.fn(({ children, onClick }) => <button onClick={onClick}>{children}</button>),
  HomeIcon: jest.fn(() => <span>WasteLess</span>)
}));

describe("AppBarComponent", () => {
  it("renders with the correct title", () => {
    const { getByText } = render(<Router><AppBarComponent /></Router>);
    expect(getByText("WasteLess")).toBeInTheDocument();
  });
//Not Working
//   it("triggers navigation when home icon is clicked", () => {
//     const mockNavigate = jest.fn();
//     jest.mock("react-router-dom", () => ({
//       ...jest.requireActual("react-router-dom"),
//       useNavigate: () => mockNavigate
//     }));

//     const { getByTestId } = render(
//       <Router>
//         <AppBarComponent />
//       </Router>
//     );

//     // Find the IconButton by its test id
//     const homeIconButton = getByTestId("home-icon");

//     fireEvent.click(homeIconButton);

//     expect(mockNavigate).toHaveBeenCalledWith("/");
//   });
});
