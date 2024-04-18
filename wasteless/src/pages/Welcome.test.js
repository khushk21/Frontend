import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Welcome";

describe('Home Component', () => {

  //Before each test, reset
  beforeEach(() => {
    delete window.location;
    window.location = { href: "" };
  });

  it("Home is the point of entry to wasteless application, Sign Up button navigates to /registration when clicked", () => {

    render(
      <Router>
        <Home />
      </Router>
    );

    const signUpButton = screen.getByText("Sign Up");
    fireEvent.click(signUpButton);

    expect(window.location.href).toBe("/registration");   
  });

  it("Home is the point of entry to wasteless application, Login button navigates to /login when clicked", () => {

    render(
      <Router>
        <Home />
      </Router>
    )

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    expect(window.location.href).toBe("/login");  
  });
});