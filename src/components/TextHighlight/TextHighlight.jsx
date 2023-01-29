import React from 'react'
import './style/TextHighlight.css'

const TextHighlight = ({ children }) => {
    return (
        <div className={'text-highlight'}>
            {children}
        </div>
    )
}

export default TextHighlight