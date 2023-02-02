import React from 'react'
import './style/ErrorMessage.css'

const ErrorMessage = ({ isError, message }) => {
    return (
        <>
            {isError ? <div className='error-message'>{message}</div> : null}
        </>
    )
}

export default ErrorMessage