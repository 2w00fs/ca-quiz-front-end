import React from 'react'
import { useLocation } from 'react-router-dom'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardResultMultipleChoice from '@/components/FlashcardResultMultipleChoice/FlashcardResultMultipleChoice.jsx'

const QuizResult = () => {
    const { quiz, results } = useLocation().state

    console.log(results)

    const getResultCards = () => results.map((result, index) => <FlashcardResultMultipleChoice quiz={quiz} result={result} />)
    

    return (
        <main className='quiz-result'>
            <div className='content-wrapper'>
                <CardsContainer>
                    {getResultCards()}
                </CardsContainer>
            </div>
        </main>
    )
}

export default QuizResult