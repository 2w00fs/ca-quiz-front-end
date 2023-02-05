import React from 'react'
import { Link } from 'react-router-dom'
import './style/Button.css'

const Button = ({ path, state, className, type, size, onClick, children }) => {
    return (
        <Link className={`${className} button button-style-${type} button-size-${size}`} to={path} state={state} onClick={onClick} >
            {children}
        </Link>
    )
}

export default Button