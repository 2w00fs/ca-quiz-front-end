import React from 'react'
import './style/Card.css'

const Card = ({ children, className }) => {
    return (
        <article className={'card' + `${className ? ' ' + className : ''}` }>
            {children}
        </article>
    )
}

export default Card