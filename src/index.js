import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/bookingConfirmation' element={<BookingConfirmation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
