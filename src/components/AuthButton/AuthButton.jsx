import React, { useEffect } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import Button from '../Button/Button.jsx'

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
            return <Button onClick={signup} type={2} size={1}>Sign Up</Button>
        } else if (url.includes('signup')) {
            return <Button onClick={login} type={2} size={1}>Login</Button>
        } else {
            return <Button onClick={logout} type={2} size={1}>Logout</Button>
        }
    }

    return (
        <>
            {generateAuthButton()}
        </>
    )
}

export default AuthButton