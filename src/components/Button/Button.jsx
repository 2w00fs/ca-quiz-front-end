import React from 'react'
import { Link } from 'react-router-dom'
import './style/Button.css'

const Button = ({ path, state, className, type, size, children }) => {
    return (
        <Link className={`${className} button button-style-${type} button-size-${size}`} to={path} state={state} >
            {children}
        </Link>
    )
}

export default Button