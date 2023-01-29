import React from 'react'
import { Link } from 'react-router-dom'
import './style/Button.css'

const Button = ({ type, children }) => {
    return (
        <Link className={`button ${type}-button`} to=''>
            {children}
        </Link>
    )
}

export default Button