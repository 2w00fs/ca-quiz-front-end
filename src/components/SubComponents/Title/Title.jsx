import React from 'react'

const Title = ({ subheading, heading }) => {
    return (
        <div className={'title'}>
            <h3>{subheading}</h3>
            <h1>{heading}</h1>
        </div>
    )
}

export default Title