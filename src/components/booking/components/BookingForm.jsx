import React from 'react';
import '../assets/BookingForm.css';

const BookingForm = (props) => {
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    props.setDate(newDate);
    props.dispatch({ type: 'UPDATE_TIMES' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: props.date,
      time: props.time,
      numberOfGuests: props.numberOfGuests,
      occasion: props.occasion
    };

    props.submitForm(formData);
  }

  const availableTimes = props.state.times.filter((time) => time !== props.time);

  return (
    <section className='bookingForm'>
      <h1>Make a reservation</h1>
      <form onSubmit={handleSubmit}>
        <section className='formGroup'>
          <label htmlFor="res-date">Select a date</label>
          <input
            type="date"
            id='res-date'
            value={props.date}
            onChange={handleDateChange}
            required={true}
          />
        </section>

        <section className='formGroup'>
          <label htmlFor="res-time">Select an hour</label>
          <select
            id='res-time'
            value={props.time}
            onChange={(e) => props.setTime(e.target.value)}
            required={true}
          >
            <option value={props.time} disabled>{props.time}</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </section>

        <section className='formGroup'>
          <label htmlFor="numberOfGuests">Select number of diners</label>
          <input
            type="number"
            id='numberOfGuests'
            placeholder='1'
            min="1"
            max="10"
            required={true}
            value={props.numberOfGuests}
            onChange={(e) => props.setNumberOfGuests(e.target.value)}
          />
        </section>

        <section className='formGroup'>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            required={true}
            value={props.occasion}
            onChange={(e) => props.setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </section>

        <input
          type='submit'
          value="Reserve"
          aria-label='On Click'
          disabled={props.numberOfGuests > 10 || props.numberOfGuests < 1 ? true : false}/>
      </form>
    </section>
  );
};

export default BookingForm;
