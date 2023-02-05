import React, { useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import Title from '@/components/Title/Title.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Button from '@/components/Button/Button.jsx'
import './style/AddSubject.css'

const AddSubject = () => {
    const [ subjectName, setSubjectName ] = useState('')

    const changeHandler = event => setSubjectName(event.target.value)

    const submitHandler = () => {
        fetch(import.meta.env.VITE_API_URL + `subject/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: subjectName })
        })
        .then(res => res.json())
        .then(json => {
            let { subject, quizzes } = json
            console.log(subject, quizzes)
            setSubject({ ...subject, quizzes })
        })
    }

    return (
        <main className='add-subject'>
            <div className='outer-content-wrapper'>
                <Title subheading='Add New' heading='SUBJECT' />
                <Card className='add-subject-form'>
                    <h3 className='subject-name'>Subject Name</h3>
                    <TextArea value={subjectName} onChange={changeHandler} />
                    <Button type='1' size='1'>Create</Button>
                </Card>
            </div>
        </main>
    )
}

export default AddSubject