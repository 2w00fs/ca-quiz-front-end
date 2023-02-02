import React from 'react'
import './style/SingleAnswerFlashcardBack.css'
import Card from '@/components/Card/Card.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const SingleAnswerFlashcardBack = ({ flashcard, results, setResults, count, maxCount, isError }) => {

    const clickHandler = event => {
        event.stopPropagation()

        let updatedResults = [...results]
        updatedResults[count] = {
            answerType: 2,
            flashcardIndex: count,
            response: event.target.value
        }
        setResults(updatedResults)
    }

    return (
        <>
            <div className='single-answer-back-wrapper'>
                <p className='page-number'>{count + 1}/{maxCount + 1}</p>
                <p className='answer-label'>Answer</p>
                <h3 className='answer-text'>{flashcard.answers[0].text}</h3>
                <form className='form-wrapper'>
                    <p className='is-correct-prompt'> Were you correct?</p>
                    <span className='answer-wrapper'>
                        <input type="radio" name='honestyForm' value={'yes'} checked={results[count] && results[count].response === 'yes' ? true : false} onClick={clickHandler} />
                        <p className='yes'>Yes</p>
                    </span>
                    <span className='answer-wrapper'>
                        <input type="radio" name='honestyForm' value={'no'} checked={results[count] && results[count].response === 'no' ? true : false} onClick={clickHandler} />
                        <p className='no'>No</p>
                    </span>
                </form>
                <ErrorMessage isError={isError} message={"You haven't given an answer"} />
            </div>
        </>
    )
}

export default SingleAnswerFlashcardBack