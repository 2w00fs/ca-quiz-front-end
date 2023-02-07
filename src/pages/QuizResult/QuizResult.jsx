import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardResult from '@/components/FlashcardResult/FlashcardResult.jsx'
import './style/QuizResult.css'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'

const QuizResult = () => {
    const { quiz, results } = useLocation().state
    const { quizId } = useParams()

    const getResultCards = () => results.map((result, index) => <FlashcardResult quiz={quiz} result={result} />)
    
    const getContentHeader = () => {
        if (!quiz.name) return null
        let heading = quiz.name && quiz.name.toUpperCase()
        let subheading = 'Quiz Result'
        let links = [
            { text: 'Subject', path: `/subject/${quiz.subjectId}`},
            { text: 'Quiz Home', path: `/quiz/${quizId}`}
        ]
        return <ContentHeader {...{ heading, subheading, links }} />
    }

    return (
        <main className='quiz-result'>
            <div className='outer-content-wrapper'>
                {getContentHeader()}
                <CardsContainer>
                    {getResultCards()}
                </CardsContainer>
            </div>
        </main>
    )
}

export default QuizResult