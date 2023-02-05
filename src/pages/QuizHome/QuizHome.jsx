import React from 'react'
import Title from '@/components/Title/Title.jsx'
import Button from '@/components/Button/Button.jsx'
import cardDeck from '../../assets/card-deck.svg'
import './style/QuizHome.css'
import { useOutletContext, useParams } from 'react-router-dom'
import BackButton from '@/components/BackButton/BackButton.jsx'

const QuizHome = () => {
    const { quiz, setQuiz } = useOutletContext()

    const { quizId } = useParams()

    const generateCardDeck = () => {
        let cardArray = []
        for (let i = 0; i < 5; i++) {
            cardArray.push(<div className='card-in-deck'></div>)
        }
        cardArray.push(<div className='card-in-deck top-card-in-deck'><p>{quiz.flashcards ? quiz.flashcards[0].question : ''}</p></div>)
        return cardArray
    }

    return (
        <main className='quiz-home'>
            <BackButton>Subject</BackButton>
            <div className='outer-content-wrapper'>
                <div className='top-content-wrapper'>
                    <Title subheading='Home' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                    <Button type='2' size='1'>Delete</Button>
                </div>
                <div className={'card-deck'}>
                    {generateCardDeck()}
                </div>
                <div className='bottom-content-wrapper'>
                    <Button path='./take' type='1' size='1'>Take Quiz</Button>
                    <Button path='./edit' type='2' size='1'>Update</Button>
                </div>
            </div>
        </main>
    )
}

export default QuizHome