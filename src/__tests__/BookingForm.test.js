import React from "react";

import { render, screen } from "@testing-library/react";

import BookingForm from '../components/booking/components/BookingForm'


const mockState = { times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"] };

test('renders BookingForm heading', () => {
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

test('button is enabled (too many people)', () => {
  render(
    <BookingForm
      state={mockState}
      date=""
      setDate={jest.fn()}
      time="12:00"
      setTime={jest.fn()}
      numberOfGuests="12"
      setNumberOfGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      dispatch={jest.fn()}
    />);

    const reserveButton = screen.getByRole('button', { name: /reserve/i })
    expect(reserveButton).toBeDisabled();
})

test('button is enabled (too few people)', () => {
  render(
    <BookingForm
      state={mockState}
      date=""
      setDate={jest.fn()}
      time="12:00"
      setTime={jest.fn()}
      numberOfGuests="0"
      setNumberOfGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      dispatch={jest.fn()}
    />);

    const reserveButton = screen.getByRole('button', { name: /reserve/i })
    expect(reserveButton).toBeDisabled();
})

test("button is disabled", () => {
  render(
    <BookingForm
      state={mockState}
      date=""
      setDate={jest.fn()}
      time="12:00"
      setTime={jest.fn()}
      numberOfGuests="4"
      setNumberOfGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      dispatch={jest.fn()}
    />);

    const reserveButton = screen.getByRole('button', { name: /reserve/i })
    expect(reserveButton).toBeEnabled();
})