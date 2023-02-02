import React, { useEffect, useRef, useState } from 'react'
import './style/SingleAnswerInputFlashcard.css'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import FlashcardWrapper from '@/components/FlashcardWrapper/FlashcardWrapper.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const SingleAnswerInputFlashcard = ({ flashcard, results, setResults, count, setCount, maxCount }) => {
    const [ isError, setIsError ] = useState(false)

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

    const leftArrowClickHandler = event => {
        if (count - 1 < 0) return
        setIsError(false)
        setCount(count - 1)
    }

    const rightArrowClickHandler = event => {
        if (!results[count]) {
            setIsError(true)
            return
        }

        if (count + 1 > maxCount) return
        
        setIsError(false)
        setCount(count + 1)
    }

    return (
        <FlashcardWrapper leftArrowClickHandler={leftArrowClickHandler} rightArrowClickHandler={rightArrowClickHandler}>
            <div className='single-answer-input-wrapper'>
                <p className='page-number'>{count + 1}/{maxCount + 1}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <p className='answer-label'>Answer</p>
                <form className='answer-wrapper'>
                    <TextArea value={results[count] && results[count].userInput ? results[count].userInput : ''} onChange={onChange}/>
                    <ErrorMessage isError={isError} message={"You haven't answered the question"} />
                </form>
            </div>
        </FlashcardWrapper>
    )
}

export default SingleAnswerInputFlashcard