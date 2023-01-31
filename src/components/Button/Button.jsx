import React from 'react'
import { Link } from 'react-router-dom'
import './style/Button.css'

const Button = ({ className, type, size, children }) => {
    return (
        <Link className={`${className} button button-style-${type} button-size-${size}`} to=''>
            {children}
        </Link>
    )
}

export default Button