import React, { useEffect, useRef, useState } from 'react'
import './style/SingleAnswerInputFlashcard.css'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import FlashcardWrapper from '@/components/FlashcardWrapper/FlashcardWrapper.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const SingleAnswerInputFlashcard = ({ flashcard, results, setResults, count, setCount, maxCount, errorMessage }) => {
    const onChange = (event) => {
        event.preventDefault()
        let updatedResults = [...results]
        if (event.target.value) {
            updatedResults[count] = {
                answerType: 3,
                flashcardIndex: count,
                userInput: event.target.value
            }
        } else {
            updatedResults[count] = null
        }
        setResults(updatedResults)
    }

    return (
        <Card className='single-answer-input-flashcard'>
            <div className='content-wrapper'>
                <p className='page-number'>{count + 1}/{maxCount + 1}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <p className='answer-label'>Answer</p>
                <form className='answer-wrapper'>
                    <TextArea value={results[count] && results[count].userInput ? results[count].userInput : ''} onChange={onChange}/>
                    <ErrorMessage message={errorMessage} />
                </form>
            </div>
        </Card>
    )
}

export default SingleAnswerInputFlashcard