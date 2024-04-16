import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewWaste from './AddNewWaste';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter


// Mock axios module
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

describe('AddNewWaste component', () => {
  test('should render form and submit successfully', async () => {
    // Mock user data
    const user = {
      userName: 'testUser',
      points: 100,
    };

    // Mock axios response for fetching user
    axios.get.mockResolvedValueOnce({ data: user });

    // Render the component
    const { getByLabelText, getByText, getByRole } = render(<Router><AddNewWaste /></Router>);

    // Mock user input
    const dateInput = getByLabelText('Date');
    fireEvent.change(dateInput, { target: { value: '2024-04-15' } });

    const weightInput = getByLabelText('Weight');
    fireEvent.change(weightInput, { target: { value: '5' } });

    // Mock axios response for submitting form
    axios.post.mockResolvedValueOnce({ status: 200, data: { user } });

    // Submit the form
    const addButton = getByRole('button', { name: 'Add Record' });
    fireEvent.click(addButton);

    // Wait for message to appear
    await waitFor(() =>
      expect(getByText('Waste record saved successfully')).toBeInTheDocument()
    );

    // Check that axios.post was called with the correct payload
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8080/addRecord',
      expect.objectContaining({
        category: expect.any(String),
        dateTime: expect.any(String),
        username: 'testUser',
        weight: '5.00',
      })
    );
  });
});