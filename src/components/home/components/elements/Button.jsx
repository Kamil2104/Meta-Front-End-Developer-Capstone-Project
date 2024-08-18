import React from 'react'

import { Link } from 'react-router-dom'

import './assets/Button.css'

const Button = (props) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  }

  return (
    <>
        {props.text === "Reserve a table"
          ? <button aria-label='On Click'> <Link to="/booking" style={linkStyle}> {props.text} </Link> </button>
          : <button> {props.text} </button>
        }
    </>
  )
}

export default Button