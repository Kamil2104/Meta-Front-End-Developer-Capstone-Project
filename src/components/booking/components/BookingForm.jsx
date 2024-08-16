import React from 'react'

import '../assets/BookingForm.css'

const BookingForm = () => {
  return (
    <section className='bookingForm'>
        <h1> Make a reservation </h1>
        <form>
          <section className='formGroup'>
            <label htmlFor="res-date"> Select a date </label>
            <input type="date" id='res-date'/>
          </section>

          <section className='formGroup'>
          <label htmlFor="res-time"> Select an hour </label>
            <select id='res-time'>
              <option> 12:00 </option>
              <option> 13:00 </option>
              <option> 14:00 </option>
              <option> 15:00 </option>
              <option> 16:00 </option>
              <option> 17:00 </option>
              <option> 18:00 </option>
              <option> 19:00 </option>
              <option> 20:00 </option>
            </select>
          </section>

          <section className='formGroup'>
            <label htmlFor="numberOfGuests"> Select number of diners </label>
            <input type="number" id='numberOfGuests'placeholder='1' min="1" max="10" />
          </section>

          <section className='formGroup'>
            <label htmlFor="occasion"> Occasion </label>
            <select id="occasion">
                <option> Birthday </option>
                <option> Anniversary </option>
                <option> Other </option>
            </select>
          </section>

          <input type='submit' value="Reserve" />
        </form>
    </section>
  )
}

export default BookingForm