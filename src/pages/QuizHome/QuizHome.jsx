import React from 'react'
import Title from '@/components/Title/Title.jsx'
import Button from '@/components/Button/Button.jsx'
import cardDeck from '../../assets/card-deck.svg'
import './style/QuizHome.css'

const QuizHome = ({ quiz }) => {
    const generateCardDeck = () => {
        let cardArray = []
        for (let i = 0; i < 5; i++) {
            cardArray.push(<div className='card-in-deck'></div>)
        }
        cardArray.push(<div className='card-in-deck top-card-in-deck'><p>{quiz.flashcards ? quiz.flashcards[0].question : ''}</p></div>)
        return cardArray
    }

    return (
        <main className='main-quiz-home'>
            <div className='quiz-home-top'>
                <Title subheading='Home' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <Button type='secondary'>Delete</Button>
            </div>
            <div className={'card-deck'}>
                {generateCardDeck()}
            </div>
            <div className='quiz-home-bottom'>
                <Button type='primary'>Take Quiz</Button>
                <Button type='secondary'>Update</Button>
            </div>
        </main>
    )
}

export default QuizHome