import React from 'react'
import Title from '@/components/ContentHeader/ContentHeader.jsx'
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
        cardArray.push(
        <div className='card-in-deck top-card-in-deck'>
            {quiz.flashcards && quiz.flashcards[0] && quiz.flashcards[0].question ? (
                <p>{quiz.flashcards[0].question}</p>
            ) : (
                <p>The quiz is empty.</p>
            )
            }
        </div>)
        return cardArray
    }

    if (!quiz.name && !quiz._id) {
        return <div></div>
    }

    return (
        <main className='quiz-home'>
            <BackButton path={`/subject/${quiz.subjectId}`} >Subject</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Home' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <div className={'card-deck'}>
                    {generateCardDeck()}
                </div>
                <div className='bottom-content-wrapper'>
                    {quiz.flashcards.length !== 0 ? (
                        <>
                            <Button path='./take' type='1' size='1'>Take Quiz</Button>
                            <Button path='./edit' type='2' size='1'>Update</Button>
                        </>
                    ) : <Button path='./edit' size='1' type='1'>Add Cards</Button>}
                </div>
            </div>
        </main>
    )
}

export default QuizHome