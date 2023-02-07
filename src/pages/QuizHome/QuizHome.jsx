import React from 'react'
import './style/QuizHome.css'
import { useOutletContext, useParams } from 'react-router-dom'
import NavButton from '@/components/NavButton/NavButton.jsx'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'

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

    const getContentHeader = () => {
        let heading = quiz.name && quiz.name.toUpperCase()
        let subheading = 'Home'
        let links = [
            { text: 'Home', path: '/'},
            { text: 'Subject', path: `/subject/${quiz.subjectId}`}
        ]
        return <ContentHeader {...{heading, subheading, links}} />
    }

    return (
        <main className='quiz-home'>
            <div className='outer-content-wrapper'>
                {getContentHeader()}
                <div className={'card-deck'}>
                    {generateCardDeck()}
                </div>
                <div className='bottom-content-wrapper'>
                    {quiz.flashcards.length !== 0 ? (
                        <>
                            <NavButton path='./take' type='1' size='1'>Take Quiz</NavButton>
                            <NavButton path='./edit' type='2' size='1'>Edit Quiz</NavButton>
                        </>
                    ) : <NavButton path='./edit' size='1' type='1'>Edit Quiz</NavButton>}
                </div>
            </div>
        </main>
    )
}

export default QuizHome