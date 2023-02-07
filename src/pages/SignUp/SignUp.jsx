import React, { useEffect, useState } from 'react'
import Title from '@/components/ContentHeader/ContentHeader.jsx'
import Card from '@/components/Card/Card.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Button from '@/components/Button/Button.jsx'
import './style/SignUp.css'
import { redirect, useNavigate } from 'react-router-dom'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const SignUp = () => {
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
    
    const createHandler = async () => {
        let res = await fetch(import.meta.env.VITE_API_URL + `auth/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        let json = await res.json()
        if (res.status === 201) {
            localStorage.setItem('jwtToken', json.jwtToken)
            localStorage.setItem('userId', json.userId)
            nav('/')
        } else {
            console.log(res, json)
            if (res.status === 500) {
                setError('Internal server error')
            } else {
                setError(json.error)
            }
        }
    }

    return (
        <main className='sign-up'>
            <div className='outer-content-wrapper'>
                <Title subheading='New User' heading='SIGN UP' />
                <Card className='create-user-form'>
                    <h3 className='username-label'>Username</h3>
                    <input type='text' value={username} onChange={usernameChangeHandler} />
                    <h3 className='password-label'>Password</h3>
                    <input type='password' value={password} onChange={passwordChangeHandler} />
                    <ErrorMessage message={error} />
                    <Button onClick={createHandler} type='1' size='1'>Create</Button>
                </Card>
            </div>
        </main>
    )
}

export default SignUp