import React, { useRef, useState } from 'react'
import './style/FlashcardResultMultipleChoice.css'
import Card from '@/components/Card/Card.jsx'
import Line from '@/components/Line/Line.jsx'

const FlashcardResultMultipleChoice = ({ quiz, result }) => {
    const letters = ['a', 'b', 'c', 'd']

    let isCorrectRef = useRef(null)
    let correctAnswerRef = useRef(null)

    const displayCorrectAnswer = () => {
        return (
            <>
                {isCorrectRef.current === false ? (<div className='correct-answer-wrapper'>
                    <p className='label'>Correct answer:</p>
                    <p className='correct-answer'>{correctAnswerRef.current}</p>
                </div>) : null}
            </>
        )
    }

    const getMultipleChoiceAnswers = () => {
        return (
            <>
                {quiz.flashcards[result.flashcardIndex].answers.map((answer, index) => {
                    if (answer.isCorrectOption === true) {
                        correctAnswerRef.current = answer.text
                    }
                    let correctOptionSelected = answer.isCorrectOption && index === result.selectedAnswerIndex
                    let incorrectOptionSelected = !correctOptionSelected && index === result.selectedAnswerIndex
                    if (correctOptionSelected) {
                        isCorrectRef.current = true
                    } else if (incorrectOptionSelected) {
                        isCorrectRef.current = false
                    }
                    return <p className={'multiple-choice-answer' + `${correctOptionSelected ? ' correct' : ''}` + `${incorrectOptionSelected ? ' incorrect' : ''}`}>{letters[index]}. {answer.text}</p>
                })}
                {displayCorrectAnswer()}
            </>
        )
    }

    const getSingleAnswerInput = () => {
        correctAnswerRef.current = quiz.flashcards[result.flashcardIndex].answers[0].text
        if (correctAnswerRef.current === result.userInput) {
            isCorrectRef.current = true
        } else {
            isCorrectRef.current = false
        }
        return (
            <>
               <div className='user-input-wrapper'>
                    <p className='label'>User input:</p>
                    <p className={'user-input' + `${isCorrectRef.current ? ' correct' : ' incorrect'}`}>{result.userInput}</p>
                </div>
                {displayCorrectAnswer()}
            </>
        )
    }

    const getSingleAnswerHonesty = () => {
        correctAnswerRef.current = quiz.flashcards[result.flashcardIndex].answers[0].text
        isCorrectRef.current = result.isCorrect
        return (
            <>
                <p className={'answer' + `${isCorrectRef.current ? ' correct' : ' incorrect'}`}>{quiz.flashcards[result.flashcardIndex].answers[0].text}</p>
                <div className='honesty-wrapper'>
                    <p className='is-correct-prompt'> Were you correct?</p>
                    <p className={'yes' + `${isCorrectRef.current ? ' bold' : ''}`}>Yes</p>
                    <p className={'no' + `${!isCorrectRef.current ? ' bold' : ''}`}>No</p>
                </div>
            </>
        )
    }

    const displayCorrectResultCard = () => {
        if (result.answerType === 1) {
            return getMultipleChoiceAnswers()
        } else if (result.answerType === 2) {
            return getSingleAnswerHonesty()
        } else if (result.answerType === 3) {
            return getSingleAnswerInput()
        } else {
            return null
        }
    }

    return (
        <Card className='flashcard-result-multiple-choice'>
            <h2 className='question'>{quiz.flashcards[result.flashcardIndex].question}</h2>
            <Line />
            <div className='answer-wrapper'>
                {displayCorrectResultCard()}
            </div>
        </Card>
    )
}

export default FlashcardResultMultipleChoice