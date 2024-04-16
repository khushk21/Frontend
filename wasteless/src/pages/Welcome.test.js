import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "./Welcome";

//TO FIX, Mock is not being registered on fireEvent
describe('Home Component', () => {

  const mockWindowLocationHref = jest.fn();
  const originalHref = window.location.href;

  //Before each test, reset mock
  beforeEach(() => {

    mockWindowLocationHref.mockClear();

    Object.defineProperty(window, 'location', {
      value: {
        ...window.location,
        href: mockWindowLocationHref,
      },
      configurable: true,
    });
  });

  afterEach(() => {
    window.location.href = originalHref;
  });

  it("Home is the point of entry to wasteless application, Sign Up button navigates to /registration when clicked", () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    )

    const signUpButton = screen.getByText("Sign Up");
    fireEvent.click(signUpButton);

    console.log('Mock function:', mockWindowLocationHref);
    console.log('Mock calls:', mockWindowLocationHref.mock.calls);    

    //Supposedly after fireEvent, the mockWindowLocationHref will have been called, and called with that location.window.href
    expect(mockWindowLocationHref).toHaveBeenCalledTimes(1);
    expect(mockWindowLocationHref).toHaveBeenCalledWith('/registration');
  });

  it("Home is the point of entry to wasteless application, Login button navigates to /login when clicked", () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    )

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    expect(mockWindowLocationHref).toHaveBeenCalledTimes(1);
    expect(mockWindowLocationHref).toHaveBeenCalledWith('/login');
  });
});