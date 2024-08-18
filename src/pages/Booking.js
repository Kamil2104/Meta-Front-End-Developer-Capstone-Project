import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import BookingForm from "../components/booking/components/BookingForm";
import Footer from "../components/Footer";

import { formattedDate } from '../functions/getCurrentDate';
import { fetchAPI, submitAPI } from '../API/api';

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

export const initializeTimes = () => {
  const initialDate = formattedDate;

  try {
    const availableTimes = fetchAPI(new Date(initialDate));

    return { times: availableTimes };
  } catch (err) {
    console.error('Error fetching initial times:', err);

    return { times: [] };
  }
};

const Booking = () => {
  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState('12:00');
  const [numberOfGuests, setNumberOfGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const [state, dispatch] = useReducer(updateTimes, { times: [] }, initializeTimes);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);

      if (success) {
        navigate('/bookingConfirmation', { state: { formData }});
      } else {
        console.error('Submission failed');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

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
        submitForm={submitForm}
      />
      <Footer />
    </>
  );
};

export default Booking;