import React from "react";

import { render, screen } from "@testing-library/react";

import BookingForm from '../components/booking/components/BookingForm'

test('renders BookingForm heading', () => {
    const mockState = { times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"] };

    render(
      <BookingForm
        state={mockState}
        date=""
        setDate={jest.fn()}
        time="12:00"
        setTime={jest.fn()}
        numberOfGuests="1"
        setNumberOfGuests={jest.fn()}
        occasion="Birthday"
        setOccasion={jest.fn()}
        dispatch={jest.fn()}
      />
    );

    const heading = screen.getByText(/Make a reservation/i);
    expect(heading).toBeInTheDocument();
  });