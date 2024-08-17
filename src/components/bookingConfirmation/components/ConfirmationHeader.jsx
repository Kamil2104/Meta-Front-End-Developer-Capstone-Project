import React from 'react'

import MiniLogo from '../assets/images/MiniLogo.png'

import '../assets/styles/ConfirmationHeader.css'

const ConfirmationHeader = () => {
  return (
    <section className='confirmationHeader'>
        <img src={MiniLogo} alt='Little Lemon Mini Logo' />
        <h1> Reservation confirmed </h1>
    </section>
  )
}

export default ConfirmationHeader