import React from 'react'

import ConfirmationHeader from '../components/bookingConfirmation/components/ConfirmationHeader'
import ConfirmationToast from '../components/bookingConfirmation/components/ConfirmationToast'

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import '../assets/styles/BookingConfirmation.css'

const BookingConfirmation = () => {
  const location = useLocation()
  const { formData} = location.state || {}

  return (
    <section className='bookingConfirmation'>
      <ConfirmationHeader />
      <ConfirmationToast formData={formData} />
      <Link to='/' role='button' className='confirmationButton' style={{textDecoration: "none"}}> Go to home page </Link>
    </section>
  )
}

export default BookingConfirmation