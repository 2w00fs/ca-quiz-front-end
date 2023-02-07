import React from 'react'
import './style/AddFlashcard.css'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import EditFlashcardForm from '@/components/EditFlashcardForm/EditFlashcardForm.jsx'

const AddFlashcard = () => {
    const { quiz, setQuiz } = useOutletContext()


    if (!quiz.flashcards) {
        return <div></div>
    }

    return (
        <main className='add-flashcard'>
            <div className='outer-content-wrapper'>
                <ContentHeader subheading='Add Flashcard' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <EditFlashcardForm setQuiz={setQuiz} action='add' />
            </div>
        </main>
    )
}

export default AddFlashcard