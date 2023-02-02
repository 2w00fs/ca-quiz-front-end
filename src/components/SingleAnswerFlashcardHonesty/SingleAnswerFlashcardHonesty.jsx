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

    const rightArrowClickHandler = event => {
        if (results[count] === null) {
            setIsError(true)
            return
        }

        if (count + 1 > maxCount) return

        setIsFlipped(false)
        setIsError(false)
        setCount(count + 1)
    }

    const leftArrowClickHandler = event => {
        if (count - 1 < 0) return

        setIsFlipped(false)
        setIsError(false)
        setCount(count - 1)
    }

    const cardClickHandler = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <FlashcardWrapper cardClickHandler={cardClickHandler} leftArrowClickHandler={leftArrowClickHandler} rightArrowClickHandler={rightArrowClickHandler}>
            {!isFlipped ? (
                <SingleAnswerFlashcardFront {...{flashcard, count, maxCount, isError}} />
            ) : (
                <SingleAnswerFlashcardBack {...{flashcard, results, setResults, count, maxCount, isError}} />
            )}
        </FlashcardWrapper>
    )
}

export default SingleAnswerFlashcardHonesty