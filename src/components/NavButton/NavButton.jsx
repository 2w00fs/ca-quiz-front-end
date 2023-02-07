import React from 'react'
import { Link } from 'react-router-dom'
import './style/NavButton.css'

const NavButton = ({ path, state, className, type, size, children }) => {
    return (
        <Link className={`nav-button nav-button-style-${type} nav-button-size-${size} ${className}`} to={path} state={state} >
            {children}
        </Link>
    )
}

export default NavButton