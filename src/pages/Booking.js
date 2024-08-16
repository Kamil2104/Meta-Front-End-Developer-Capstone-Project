import React from "react"

import { useState } from 'react'

import NavigationBar from "../components/NavigationBar"
import Header from "../components/Header"
import BookingForm from "../components/booking/components/BookingForm"
import Footer from "../components/Footer"

const Booking = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('12:00')
  const [numberOfGuests, setNumberOfGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')

  const avaibleTimes = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00 ", "18:00", "19:00", "20:00"]

  return (
    <>
      <NavigationBar />
      <Header />
      <BookingForm
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        numberOfGuests={numberOfGuests} setNumberOfGuests={setNumberOfGuests}
        occasion={occasion} setOccasion={setOccasion}
        avaibleTimes={avaibleTimes}
      />
      <Footer />
    </>
  )
}

export default Booking