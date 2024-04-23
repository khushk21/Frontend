import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./NavBar.js";

describe("Navbar", () => {
  it("renders with navigation links", () => {
    const points = 100; // Mock points
    const username = "testuser"; // Mock username

    const { getByText } = render(
      <MemoryRouter>
        <Navbar points={points} username={username} />
      </MemoryRouter>
    );

    // Assert that the logo is rendered correctly
    expect(getByText("WasteLess")).toBeInTheDocument();

    // Assert that the Home link is rendered correctly
    expect(getByText("Home").closest("a")).toHaveAttribute(
      "href",
      `/home?username=${username}`
    );

    // Assert that the Catalogue link is rendered correctly
    expect(getByText("Catalogue").closest("a")).toHaveAttribute(
      "href",
      `/catalogue?username=${username}`
    );

    // Assert that the Add Waste link is rendered correctly
    expect(getByText("Add Waste").closest("a")).toHaveAttribute(
      "href",
      `/addwaste?username=${username}`
    );

    // Assert that the Profile link is rendered correctly
    expect(getByText("Profile").closest("a")).toHaveAttribute(
      "href",
      `/profile?username=${username}`
    );

    // Assert that the points are rendered correctly
    expect(getByText("100")).toBeInTheDocument();
  });
});
