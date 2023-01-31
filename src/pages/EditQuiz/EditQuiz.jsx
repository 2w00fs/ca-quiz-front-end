import React from 'react'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import EditFlashcardCard from '@/components/EditFlashcardCard/EditFlashcardCard.jsx'
import './style/EditQuiz.css'
import { useOutletContext } from 'react-router-dom'

const EditQuiz = () => {
    const { quiz, setQuiz } = useOutletContext()
    const getFlashcards = flashcards => {
        if (!flashcards) {
            return []
        }
        let flashcardList = flashcards.map(flashcard => <EditFlashcardCard key={flashcard._id} flashcard={flashcard} />)
        flashcardList.push(<AddButton />)
        return flashcardList
    }

    return (
        <main>
            <Title subheading='Edit Quiz' heading={quiz.name} />
            <CardsContainer>
                {getFlashcards(quiz.flashcards)}
            </CardsContainer>
        </main>
    )
}

export default EditQuiz