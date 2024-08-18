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
          ? <Link to="/booking" className="clickableLink" style={linkStyle}> {props.text} </Link>
          : <button> {props.text} </button>
        }
    </>
  )
}

export default Button