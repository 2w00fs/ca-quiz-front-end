import React, { useEffect } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import ActionButton from '@/components/ActionButton/ActionButton.jsx'
import './style/AuthButton.css'

const AuthButton = () => {
    let nav = useNavigate()

    const logout = (event) => {
        localStorage.clear()
        event.preventDefault()
        nav('/auth/login')
    }

    const login = (event) => {
        event.preventDefault()
        nav('/auth/login')
    }

    const signup = (event) => {
        event.preventDefault()
        nav('/auth/signup')
    }

    const generateAuthButton = () => {
        let url = window.location.href
        if (url.includes('login')) {
            return <ActionButton className='auth-button' onClick={signup} type={2} size={1}>Sign Up</ActionButton>
        } else if (url.includes('signup')) {
            return <ActionButton className='auth-button' onClick={login} type={2} size={1}>Login</ActionButton>
        } else {
            return <ActionButton className='auth-button' onClick={logout} type={2} size={1}>Logout</ActionButton>
        }
    }

    return (
        <>
            {generateAuthButton()}
        </>
    )
}

export default AuthButton