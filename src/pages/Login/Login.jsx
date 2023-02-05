import React, { useEffect, useState } from 'react'
import Title from '@/components/Title/Title.jsx'
import Card from '@/components/Card/Card.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Button from '@/components/Button/Button.jsx'
import './style/Login.css'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)

    let nav = useNavigate()

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginHandler = async () => {
        let res = await fetch(import.meta.env.VITE_API_URL + `auth/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        let json = await res.json()
        if (res.status === 200) {
            localStorage.setItem('jwtToken', json.jwtToken)
            localStorage.setItem('userId', json.userId)
            nav('/')
        } else {
            if (res.status === 500) {
                setError('Internal server error')
            } else {
                setError(json.error)
            }
        }
    }

    return (
        <main className='login'>
            <div className='outer-content-wrapper'>
                <Title subheading='User' heading='LOGIN' />
                <Card className='create-user-form'>
                    <h3 className='username-label'>Username</h3>
                    <input type='text' value={username} onChange={usernameChangeHandler} />
                    <h3 className='password-label'>Password</h3>
                    <input type='password' value={password} onChange={passwordChangeHandler} />
                    <ErrorMessage message={error} />
                    <Button onClick={loginHandler} type='1' size='1'>Login</Button>
                </Card>
            </div>
        </main>
    )
}

export default Login