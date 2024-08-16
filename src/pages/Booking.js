import React from "react"

import NavigationBar from "../components/NavigationBar"
import Header from "../components/Header"
import BookingForm from "../components/booking/components/BookingForm"
import Footer from "../components/Footer"

const Booking = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <BookingForm />
      <Footer />
    </>
  )
}

export default Booking