import React from 'react'

import './assets/Review.css'

const Review = (props) => {
  return (
    <section className='review'>
        <section className='client'>
            <section className='clientPhoto'>
                <img src={props.clientPhoto} alt={props.clientName} />
            </section>
            <section className='clientText'>
                <section className='clientName'>
                    <p> {props.clientName} </p>
                </section>
                <section className='clientRating'>
                    <p> Rating: {props.clientRating} </p>
                </section>
            </section>
        </section>
        <section className='comment'>
            <p> {props.clientReview} </p>
        </section>
    </section>
  )
}

export default Review