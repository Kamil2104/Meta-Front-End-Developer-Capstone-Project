import React from 'react'

import './assets/Button.css'

const Button = (props) => {
  return (
    <>
      <button> {props.text} </button>
    </>
  )
}

export default Button