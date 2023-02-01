import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/MultipleChoiceFlashcard.css'
import Line from '@/components/Line/Line.jsx'

const MultipleChoiceFlashcard = ({ flashcard, setResults, pageNumber, totalPages }) => {

    console.log(flashcard.answers)
    const getAnswers = () => {
        let answers = flashcard.answers.map((answer, index) => {
            return (
                <span className='answer-wrapper'>
                    <input type="radio" name='multipleChoiceAnswers' value={index} />
                    <p className='answer-text'>{answer.text}</p>
                </span>
            )
        })
        console.log(answers)
        return answers
    }

    return (
        <Card>
            <div className='multiple-choice-wrapper'>
                <p className='page-number'>{pageNumber}/{totalPages}</p>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <form className='answer-list-wrapper'>
                    {getAnswers()}
                </form>
            </div>
        </Card>
    )
}

export default MultipleChoiceFlashcard