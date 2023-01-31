import React from 'react'
import { Link } from 'react-router-dom'
import './style/Button.css'

const Button = ({ type, size, children }) => {
    return (
        <Link className={`button button-style-${type} button-size-${size}`} to=''>
            {children}
        </Link>
    )
}

export default Button