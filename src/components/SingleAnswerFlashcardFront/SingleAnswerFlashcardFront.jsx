import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/SingleAnswerFlashcardFront.css'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const SingleAnswerFlashcardFront = ({ flashcard, count, maxCount, isError }) => {
    return (
        <>
            <div className='single-answer-front-wrapper'>
                <p className='page-number'>{count + 1}/{maxCount + 1}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <p className='click-to-flip'>Click to flip</p>
                <ErrorMessage isError={isError} message={"You haven't given an answer"} />
            </div>
        </>
    )
}

export default SingleAnswerFlashcardFront