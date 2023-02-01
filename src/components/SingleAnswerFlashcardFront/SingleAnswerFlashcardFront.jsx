import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/SingleAnswerFlashcardFront.css'

const SingleAnswerFlashcardFront = ({ flashcard, pageNumber, totalPages }) => {
    return (
        <Card>
            <div className='single-answer-front-wrapper'>
                <p className='page-number'>{pageNumber}/{totalPages}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <p className='click-to-flip'>Click to flip</p>
            </div>
        </Card>
    )
}

export default SingleAnswerFlashcardFront