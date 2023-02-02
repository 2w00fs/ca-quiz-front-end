import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import MultipleChoiceFlashcard from '@/components/MultipleChoiceFlashcard/MultipleChoiceFlashcard.jsx'
import Title from '@/components/Title/Title.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/TakeQuiz.css'
import SingleAnswerFlashcardFront from '@/components/SingleAnswerFlashcardFront/SingleAnswerFlashcardFront.jsx'
import SingleAnswerFlashcardBack from '@/components/SingleAnswerFlashcardBack/SingleAnswerFlashcardBack.jsx'
import SingleAnswerInputFlashcard from '@/components/SingleAnswerInputFlashcard/SingleAnswerInputFlashcard.jsx'

const TakeQuiz = () => {
    const { quiz, setQuiz } = useOutletContext()

    const [ results, setResults ] = useState({})
    const [ count, setCount ] = useState(0)

    if (quiz.name === undefined) {
        return <div></div>
    }
    console.log(quiz.flashcards.length)

    return (
        <main className='take-quiz'>
            <div className='outer-content-wrapper'>
                <Title heading={quiz.name} subheading={'Take Quiz'} />
                <div className='inner-content-wrapper'>
                    <Card className='left-arrow arrow'>
                        <div>{'<'}</div>
                    </Card>
                    {/* <MultipleChoiceFlashcard flashcard={quiz.flashcards[count]} setResults={setResults} pageNumber={count + 1} totalPages={quiz.flashcards.length} /> */}
                    {/* <SingleAnswerFlashcardFront flashcard={quiz.flashcards[count]} pageNumber={count + 1} totalPages={quiz.flashcards.length} /> */}
                    {/* <SingleAnswerFlashcardBack flashcard={quiz.flashcards[count]} setResults={setResults} pageNumber={count + 1} totalPages={quiz.flashcards.length} /> */}
                    <SingleAnswerInputFlashcard flashcard={quiz.flashcards[count]} setResults={setResults} pageNumber={count + 1} totalPages={quiz.flashcards.length} />
                    <Card className='right-arrow arrow'>
                        <div>{'>'}</div>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default TakeQuiz