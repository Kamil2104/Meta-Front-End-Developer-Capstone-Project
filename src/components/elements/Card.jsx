import React from 'react'

import './assets/Card.css'

const Card = (props) => {
  return (
    <section className='card'>
      <section className='image'>
        <img src={props.image} alt={props.alt} />
      </section>
      <section className='content'>
        <section className='title'>
          <h3> {props.title} </h3>
          <h3 className='price'> {props.price} </h3>
        </section>
        <section className='description'>
          <p> {props.description} </p>
        </section>
        <section className='delivery'>
          <span> Order for delivery </span>
        </section>
      </section>
    </section>
  )
}

export default Card