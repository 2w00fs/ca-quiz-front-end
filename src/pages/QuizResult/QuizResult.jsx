import React from 'react'
import { useLocation } from 'react-router-dom'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardResult from '@/components/FlashcardResult/FlashcardResult.jsx'
import './style/QuizResult.css'
import Title from '@/components/Title/Title.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'

const QuizResult = () => {
    const { quiz, results } = useLocation().state

    console.log(results)

    const getResultCards = () => results.map((result, index) => <FlashcardResult quiz={quiz} result={result} />)
    

    return (
        <main className='quiz-result'>
            <BackButton>Subject</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Quiz Results' heading={quiz.name} />
                <CardsContainer>
                    {getResultCards()}
                </CardsContainer>
            </div>
        </main>
    )
}

export default QuizResult