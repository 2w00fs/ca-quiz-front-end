import React from 'react'
import './style/FlashcardResultMultipleChoice.css'
import Card from '@/components/Card/Card.jsx'
import Line from '@/components/Line/Line.jsx'

const FlashcardResultMultipleChoice = ({ quiz, result }) => {
    const letters = ['a', 'b', 'c', 'd']

    const getAnswers = () => {
        return quiz.flashcards[result.flashcardIndex].answers.map((answer, index) => {
            let isCorrect = answer.isCorrectOption && index === result.selectedAnswerIndex
            let isIncorrect = !isCorrect && index === result.selectedAnswerIndex
            return <p className={'answer' + `${isCorrect ? ' correct' : ''}` + `${isIncorrect ? ' incorrect' : ''}`}>{letters[index]}. {answer.text}</p>
        })
    }

    console.log(quiz)

    return (
        <Card className='card-content-wrapper'>
            <h2 className='question'>{quiz.flashcards[result.flashcardIndex].question}</h2>
            <Line />
            <div className='answer-wrapper'>
                {getAnswers()}
            </div>
        </Card>
    )
}

export default FlashcardResultMultipleChoice