import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/AddButton.css'

const AddButton = ({ onClick, path, text, isEmpty }) => {
    return (
                <Card onClick={onClick} className='add-card' path={path}>
                    <img src="/src/assets/add-button-dark.svg" alt="" />
                    <h3 className='text'>{text}</h3>
                </Card>
            )
}

export default AddButton