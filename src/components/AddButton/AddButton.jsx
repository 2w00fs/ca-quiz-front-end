import React from 'react'
import { Link } from 'react-router-dom'
import LinkCard from '@/components/LinkCard/LinkCard.jsx'
import './style/AddButton.css'

const AddButton = ({ path, text, isEmpty }) => {
    console.log(isEmpty)
    return (
        <>
            {
                !isEmpty ? (
                    <div className={'add-button-container'}>
                        <Link to={path} className={'add-subject-button'} />
                    </div>
                ) : (
                    <LinkCard className='add-card' path={path}>
                        <h3 className='text'>{text}</h3>
                        <img src="/src/assets/add-button.svg" alt="" />
                    </LinkCard>
                )
            }
        </>
    )
}

export default AddButton