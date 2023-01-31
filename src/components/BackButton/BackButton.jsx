import React from 'react'
import Button from '@/components/Button/Button.jsx'

const BackButton = ({ className, children }) => {
    return (
        <Button className={className} type='2' size='1'>
            <div className='back-arrow'>{'<'}</div>
            <p>{children}</p>
        </Button>
    )
}

export default BackButton