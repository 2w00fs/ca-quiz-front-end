import React from 'react'
import { Link } from 'react-router-dom'
import './style/AddButton.css'

const AddButton = ({ path }) => {
    return (
        <div className={'add-button-container'}>
            <Link to={path} className={'add-subject-button'}>
                {/* <img src="src/assets/add-button.svg" alt="Add Button" /> */}
            </Link>
        </div>
    )
}

export default AddButton