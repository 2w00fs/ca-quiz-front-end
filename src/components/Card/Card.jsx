import React from 'react'
import './style/Card.css'

const Card = ({ children, className, onClick }) => {
    return (
        <article onClick={onClick} className={'card' + `${className ? ' ' + className : ''}` }>
            {children}
        </article>
    )
}

export default Card