import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WasteRec from "./WasteRec";

describe('WasteRec Component', () => {

  it("Tabs Bar to tab through waste records", () => {

    render(<WasteRec />);
    waitFor(() => {
      const searchButton = screen.queryByTestId("search-testid");
      expect(searchButton).toBeInTheDocument();
    });
  });

  it("Search Bar to search for records", () => {

    render(<WasteRec />);
    waitFor(() => {
      const tabs = screen.queryByTestId("tab-testid");
      expect(tabs).toBeInTheDocument();
    });
  });
});