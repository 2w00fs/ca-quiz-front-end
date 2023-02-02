import React, { useState } from 'react'
import './style/SingleAnswerInputFlashcard.css'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'

const SingleAnswerInputFlashcard = ({ flashcard, setResults, pageNumber, totalPages }) => {
    const [ userInput, setUserInput ] = useState('')

    const onChange = (event) => {
        event.preventDefault()
        setUserInput(event.target.value)
    }

    return (
        <Card className='single-answer-input-card'>
            <div className='content-wrapper'>
                <p className='page-number'>{pageNumber}/{totalPages}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <p className='answer-label'>Answer</p>
                <form className='answer-list-wrapper'>
                    <TextArea value={userInput} onChange={onChange}/>
                </form>
            </div>
        </Card>
    )
}

export default SingleAnswerInputFlashcard