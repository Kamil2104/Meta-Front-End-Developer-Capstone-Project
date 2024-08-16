import React from 'react'

import { useState } from 'react'

import '../assets/BookingForm.css'

const BookingForm = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('12:00')
  const [numberOfGuests, setNumberOfGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')

  const avaibleTimes = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00 ", "18:00", "19:00", "20:00"]

  return (
    <section className='bookingForm'>
        <h1> Make a reservation </h1>
        <form>
          <section className='formGroup'>
            <label htmlFor="res-date"> Select a date </label>
            <input type="date" id='res-date' value={date} onChange={(e) => setDate(e.target.value)} />
          </section>

          <section className='formGroup'>
          <label htmlFor="res-time"> Select an hour </label>
            <select id='res-time' value={time} onChange={(e) => setTime(e.target.value)}>
              {avaibleTimes.map((time, index) => (
                <option key={index}> {time} </option>
              ))}
            </select>
          </section>

          <section className='formGroup'>
            <label htmlFor="numberOfGuests"> Select number of diners </label>
            <input type="number" id='numberOfGuests'placeholder='1' min="1" max="10" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}/>
          </section>

          <section className='formGroup'>
            <label htmlFor="occasion"> Occasion </label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
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