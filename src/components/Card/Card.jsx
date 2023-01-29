import React from 'react'
import './style/Card.css'

const Card = ({ children }) => {
    return (
        <article>
            {children}
        </article>
    )
}

export default Card