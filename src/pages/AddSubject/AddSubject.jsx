import React, { useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import Title from '@/components/ContentHeader/ContentHeader.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Button from '@/components/Button/Button.jsx'
import './style/AddSubject.css'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'
import { useNavigate, useOutletContext } from 'react-router-dom'

const AddSubject = () => {
    const [ subjectName, setSubjectName ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const nav = useNavigate()

    const changeHandler = event => setSubjectName(event.target.value)

    const submitHandler = async (event) => {
        if (!subjectName) {
            setErrorMessage('Subject name cannot be blank')
        }

        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: subjectName })
        })
        let json = await res.json()
        if (res.status === 201) {
            nav(`/subject/${json._id}`)
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    return (
        <main className='add-subject'>
            <div className='outer-content-wrapper'>
                <Title subheading='Add New' heading='SUBJECT' />
                <Card className='add-subject-form'>
                    <h3 className='subject-name'>Subject Name</h3>
                    <TextArea value={subjectName} onChange={changeHandler} />
                    <ErrorMessage message={errorMessage} />
                    <Button onClick={submitHandler} type='1' size='1'>Create</Button>
                </Card>
            </div>
        </main>
    )
}

export default AddSubject