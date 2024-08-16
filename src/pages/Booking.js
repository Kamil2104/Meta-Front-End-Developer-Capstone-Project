import React, { useState, useReducer } from 'react';
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import BookingForm from "../components/booking/components/BookingForm";
import Footer from "../components/Footer";

export const initializeTimes = () => {
  return {
    times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
  };
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {
        ...state,
        times: state.times
      };
    default:
      return state;
  }
};

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00');
  const [numberOfGuests, setNumberOfGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  return (
    <>
      <NavigationBar />
      <Header />
      <BookingForm
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        numberOfGuests={numberOfGuests} setNumberOfGuests={setNumberOfGuests}
        occasion={occasion} setOccasion={setOccasion}
        state={state} dispatch={dispatch}
      />
      <Footer />
    </>
  );
};

export default Booking;
