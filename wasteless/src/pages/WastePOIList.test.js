import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation, BrowserRouter as Router  } from "react-router-dom";
import WastePOIList from "./WastePOIList";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('WasteRec Component', () => {

  beforeEach(() => {
    // Mock useLocation with desired state
    useLocation.mockReturnValue({
      state: {
        user: {
          points: 100,  // Example points value for the user
          userName: 'testuser'  // Example username
        },
        wastePOIs: [
          // Example waste POIs array
          { id: 1, name: 'Waste POI 1' },
          { id: 2, name: 'Waste POI 2' },
        ],
        category: 'E WASTE'  // Example category
      }
    });
  });

  it("should render the element with data-testid=wastePOIs-testid in the document", () => {

    render(
      <Router>
        <WastePOIList />
      </Router>
    );

    const wastePOIsElement = screen.getByTestId('wastePOIs-testid');
    expect(wastePOIsElement).toBeInTheDocument();
  });
});