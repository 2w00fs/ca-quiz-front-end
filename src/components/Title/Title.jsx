import React from 'react'
import './style/Title.css'
import TextHighlight from '../TextHighlight/TextHighlight.jsx'

const Title = ({ subheading, heading }) => {
    return (
        <div className={'title'}>
            <TextHighlight>
                <h3>{subheading}</h3>
            </TextHighlight>
            <h1>{heading}</h1>
        </div>
    )
}

export default Title