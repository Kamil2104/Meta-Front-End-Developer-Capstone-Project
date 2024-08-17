import React, { useState, useReducer, useEffect } from 'react';
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import BookingForm from "../components/booking/components/BookingForm";
import Footer from "../components/Footer";

import { formattedDate } from '../functions/getCurrentDate';
import { fetchAPI } from '../API/api';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'FETCH_TIMES_SUCCESS':
      return {
        ...state,
        times: action.payload
      };
    default:
      return state;
  }
};

const Booking = () => {
  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState('12:00');
  const [numberOfGuests, setNumberOfGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const [state, dispatch] = useReducer(updateTimes, { times: [] });

  useEffect(() => {
    const fetchTimes = () => {
      try {
        const availableTimes = fetchAPI(new Date(date));

        dispatch({ type: 'FETCH_TIMES_SUCCESS', payload: availableTimes });
      } catch (error) {
        console.error('Error fetching times:', error);
      }
    };

    fetchTimes();
  }, [date]);

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