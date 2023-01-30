import React from 'react'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/QuizCard.css'
import cardsLogo from '../../assets/cards.svg'

const QuizCard = ({ quiz }) => {
    return (
        <Card>
            <div className={'quiz-card-tag'}>Quiz</div>
            <div className={'quiz-card-content'}>
                <h2>{quiz.name}</h2>
                <div className={'flashcard-count-container'}><img src={cardsLogo} alt="Flashcards Logo" /> {`${quiz.flashcardCount} ${quiz.flashcardCount > 1 ? 'flashcards' : 'flashcard'}`}</div>
            </div>
        </Card>
    )
}

export default QuizCard