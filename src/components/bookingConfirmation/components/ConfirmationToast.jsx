import React from 'react'

import '../assets/styles/ConfirmationToast.css'

const ConfirmationToast = (props) => {
  return (
    <section className='confirmationToast'>
        <section className='header'>
            <h1> Details </h1>
        </section>
        <section className='details'>
            <section className='row'>
                <p> Date: {props.formData.date} </p>
            </section>
            <section className='row'>
                <p> Time: {props.formData.time} </p>
            </section>
            <section className='row'>
                <p> Number of guests: {props.formData.numberOfGuests} </p>
            </section>
            <section className='row'>
                <p> Occasion: {props.formData.occasion} </p>
            </section>
        </section>
    </section>
  )
}

export default ConfirmationToast