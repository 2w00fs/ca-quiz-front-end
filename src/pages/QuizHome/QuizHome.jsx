import React from 'react'
import Title from '@/components/Title/Title.jsx'
import Button from '@/components/Button/Button.jsx'
import cardDeck from '../../assets/card-deck.svg'
import './style/QuizHome.css'
import { useOutletContext } from 'react-router-dom'

const QuizHome = () => {
    const { quiz, setQuiz } = useOutletContext()

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
                <Button type='2' size='1'>Delete</Button>
            </div>
            <div className={'card-deck'}>
                {generateCardDeck()}
            </div>
            <div className='quiz-home-bottom'>
                <Button type='1' size='1'>Take Quiz</Button>
                <Button type='2' size='1'>Update</Button>
            </div>
        </main>
    )
}

export default QuizHome