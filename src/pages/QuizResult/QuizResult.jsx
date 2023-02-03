import React from 'react'
import { useLocation } from 'react-router-dom'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardResultMultipleChoice from '@/components/FlashcardResultMultipleChoice/FlashcardResultMultipleChoice.jsx'
import './style/QuizResult.css'
import Title from '@/components/Title/Title.jsx'

const QuizResult = () => {
    const { quiz, results } = useLocation().state

    console.log(results)

    const getResultCards = () => results.map((result, index) => <FlashcardResultMultipleChoice quiz={quiz} result={result} />)
    

    return (
        <main className='quiz-result'>
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