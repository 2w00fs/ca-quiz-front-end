import React, { useEffect, useRef, useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/MultipleChoiceFlashcard.css'
import Line from '@/components/Line/Line.jsx'
import FlashcardWrapper from '@/components/FlashcardWrapper/FlashcardWrapper.jsx'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'

const MultipleChoiceFlashcard = ({ flashcard, results, setResults, count, maxCount, isError }) => {
    const getAnswers = () => {
        let answers = flashcard.answerOptions.map((answer, index) => {
            return (
                <span className='answer-wrapper'>
                    <input checked={results[count] && results[count].selectedAnswerIndex === index ? true : false} onChange={onChangeInput} type="radio" name='multipleChoiceAnswers' value={index} />
                    <p className='answer-text'>{answer.text}</p>
                </span>
            )
        })
        return answers
    }

    const onChangeInput = event => {
        let updatedResults = [...results]
        updatedResults[count] = {
            answerType: 1,
            flashcardIndex: count,
            selectedAnswerIndex: parseInt(event.target.value)
        }
        setResults(updatedResults)
    }

    return (
        <Card className='multiple-choice-flashcard'>
            <div className='content-wrapper'>
                <p className='page-number'>{count + 1}/{maxCount + 1}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <form className='answer-list-wrapper'>
                    {getAnswers()}
                    <ErrorMessage isError={isError} message={"You haven't selected an answer"} />
                </form>
            </div>
        </Card>
    )
}

export default MultipleChoiceFlashcard