import React from 'react'
import Button from '@/components/Button/Button.jsx'
import './style/BackButton.css'

const BackButton = ({ path, children }) => {
    return (
        <Button path={path} className='back-button' type='2' size='1'>
            <div className='back-arrow'>{'<'}</div>
            <div>{children}</div>
        </Button>
    )
}

export default BackButton