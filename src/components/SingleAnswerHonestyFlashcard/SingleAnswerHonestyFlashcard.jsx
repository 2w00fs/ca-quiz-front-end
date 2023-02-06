import React, { useEffect, useRef, useState } from 'react'
import SingleAnswerFlashcardBack from '@/components/SingleAnswerFlashcardBack/SingleAnswerFlashcardBack.jsx'
import SingleAnswerFlashcardFront from '@/components/SingleAnswerFlashcardFront/SingleAnswerFlashcardFront.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/SingleAnswerHonestyFlashcard.css'

const SingleAnswerHonestyFlashcard = ({ flashcard, results, setResults, count, maxCount, errorMessage, isFlipped, setIsFlipped }) => {
    useEffect(() => {
        if (results[count]) {
            setIsFlipped(true)
        }
    }, [count])

    const cardClickHandler = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <Card className='single-answer-honesty-flashcard' onClick={cardClickHandler}>
            {!isFlipped ? (
                <SingleAnswerFlashcardFront {...{flashcard, count, maxCount, errorMessage}} />
            ) : (
                <SingleAnswerFlashcardBack {...{flashcard, results, setResults, count, maxCount, errorMessage}} />
            )}
        </Card>
    )
}

export default SingleAnswerHonestyFlashcard