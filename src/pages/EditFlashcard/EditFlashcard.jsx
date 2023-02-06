import React from 'react'
import './style/EditFlashcard.css'
import Title from '@/components/Title/Title.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import EditFlashcardForm from '@/components/EditFlashcardForm/EditFlashcardForm.jsx'

const EditFlashcard = () => {
    const { quiz, setQuiz } = useOutletContext()
    const { flashcardId, quizId } = useParams()

    const getFlashcardById = () => {
        for (let flashcard of quiz.flashcards) {
            if (flashcard._id == flashcardId) {
                return flashcard
            }
        }
    }

    if (!quiz.flashcards) {
        return <div></div>
    }

    return (
        <main className='edit-flashcard'>
            <BackButton path={`/quiz/${quizId}/edit`} className={'edit-flashcard-back-button'}>Quiz</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Edit Flashcard' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <EditFlashcardForm flashcard={getFlashcardById()} setQuiz={setQuiz} />
            </div>
        </main>
    )
}

export default EditFlashcard