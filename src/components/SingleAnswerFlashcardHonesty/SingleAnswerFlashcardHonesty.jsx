import React, { useEffect, useRef, useState } from 'react'
import FlashcardWrapper from '@/components/FlashcardWrapper/FlashcardWrapper.jsx'
import SingleAnswerFlashcardBack from '@/components/SingleAnswerFlashcardBack/SingleAnswerFlashcardBack.jsx'
import SingleAnswerFlashcardFront from '@/components/SingleAnswerFlashcardFront/SingleAnswerFlashcardFront.jsx'

const SingleAnswerFlashcardHonesty = ({ flashcard, results, setResults, count, setCount, maxCount }) => {
    const [ isError, setIsError ] = useState(false)
    const [ isFlipped, setIsFlipped ] = useState(results[count] ? true : false)

    useEffect(() => {
        if (results[count]) {
            setIsFlipped(true)
        }
    }, [count])

    const cardClickHandler = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <FlashcardWrapper cardClickHandler={cardClickHandler} setIsError={setIsError} count={count} setCount={setCount} setIsFlipped={setIsFlipped} results={results} maxCount={maxCount}>
            {!isFlipped ? (
                <SingleAnswerFlashcardFront {...{flashcard, count, maxCount, isError}} />
            ) : (
                <SingleAnswerFlashcardBack {...{flashcard, results, setResults, count, maxCount, isError}} />
            )}
        </FlashcardWrapper>
    )
}

export default SingleAnswerFlashcardHonesty