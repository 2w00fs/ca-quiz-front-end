import React from 'react'
import './style/EditFlashcard.css'
import Title from '@/components/Title/Title.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import EditFlashcardForm from '@/components/EditFlashcardForm/EditFlashcardForm.jsx'

const EditFlashcard = () => {
    const { quiz, setQuiz } = useOutletContext()
    const { flashcardId } = useParams()

    const getFlashcardById = () => {
        for (let flashcard of quiz.flashcards) {
            if (flashcard._id == flashcardId) {
                return flashcard
            }
        }
    }

    const setFlashcardById = (flashcardId, updatedFlashcard, quiz) => {
        quiz.flashcards.forEeach((flashcard, index) => {
            if (flashcard._id === flashcardId) {
                let flashcardList = [...quiz.flashcards]
                flashcardList[index] = updatedFlashcard
                setQuiz({...quiz, flashcards: flashcardList})
                return
            }
        })
        setQuiz({...quiz, flashcards: [...quiz.flashcards, updatedFlashcard]})
    }

    if (!quiz.flashcards) {
        return <div></div>
    }

    return (
        <main className='edit-flashcard'>
            <BackButton className={'edit-flashcard-back-button'}>Quiz</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Edit Flashcard' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <EditFlashcardForm flashcard={getFlashcardById()} setFlashcardById={setFlashcardById} />
            </div>
        </main>
    )
}

export default EditFlashcard