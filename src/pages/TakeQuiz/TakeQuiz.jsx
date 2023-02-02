import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MultipleChoiceFlashcard from '@/components/MultipleChoiceFlashcard/MultipleChoiceFlashcard.jsx'
import Title from '@/components/Title/Title.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/TakeQuiz.css'
import SingleAnswerHonestyFlashcard from '@/components/SingleAnswerFlashcardHonesty/SingleAnswerFlashcardHonesty.jsx'
import SingleAnswerInputFlashcard from '@/components/SingleAnswerInputFlashcard/SingleAnswerInputFlashcard.jsx'
import FlashcardWrapper from '@/components/FlashcardWrapper/FlashcardWrapper.jsx'

const TakeQuiz = () => {
    const { quiz } = useOutletContext()

    const [ results, setResults ] = useState([])
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        if (quiz.flashcards) {
            setResults(new Array(quiz.flashcards.length).fill(null))
        }
    }, [quiz])

    if (quiz.name === undefined) {
        return <div></div>
    }

    const generateFlashcard = () => {
        if (quiz.flashcards[count].answers === 1) {
            return <MultipleChoiceFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} setCount={setCount} maxCount={quiz.flashcards.length - 1} />
        } else if (quiz.flashcards[count].takesTextInput === true) {
            return <SingleAnswerInputFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} setCount={setCount} maxCount={quiz.flashcards.length - 1} />
        } else {
            return <SingleAnswerHonestyFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} setCount={setCount} maxCount={quiz.flashcards.length - 1} />
        }
    }

    return (
        <main className='take-quiz'>
            <div className='outer-content-wrapper'>
                <Title heading={quiz.name} subheading={'Take Quiz'} />
                {generateFlashcard()}
            </div>
        </main>
    )
}

export default TakeQuiz