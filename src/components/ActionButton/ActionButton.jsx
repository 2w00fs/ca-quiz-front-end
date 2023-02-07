import React from 'react'
import { Link } from 'react-router-dom'
import './style/ActionButton.css'

const Button = ({ onClick, className, type, size, children }) => {
    return (
        <div className={`action-button action-button-style-${type} action-button-size-${size} ${className}`} onClick={onClick} >
            <div>{children}</div>
        </div>
    )
}

export default Button