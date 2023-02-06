import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from '../AuthButton/AuthButton.jsx'
import Button from '../Button/Button.jsx'
import './style/Nav.css'

const Nav = () => {
    return (
        <header>
            <div className={'left-header'}>
                <div className='logo'>CA Quiz</div>
                <nav className='nav'>
                    <ul>
                        <li><Link to='/'>Subjects</Link></li>
                        <li><Link to='/subject/add'>Create</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={'right-header'}>
                <AuthButton />
            </div>
        </header>
    )
}

export default Nav