import React from 'react'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardDetails from '@/components/FlashcardDetails/FlashcardDetails.jsx'
import './style/EditQuiz.css'
import { useOutletContext } from 'react-router-dom'
import BackButton from '@/components/BackButton/BackButton.jsx'

const EditQuiz = () => {
    const { quiz, setQuiz } = useOutletContext()

    console.log(quiz)

    const getFlashcards = flashcards => {
        if (!flashcards) {
            return []
        }
        let flashcardList = flashcards.map(flashcard => <FlashcardDetails key={flashcard._id} flashcard={flashcard} />)
        flashcardList.push(<AddButton />)
        return flashcardList
    }

    return (
        <main className='edit-quiz'>
            <BackButton>Quiz Home</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Edit Quiz' heading={quiz.name} />
                <CardsContainer>
                    {getFlashcards(quiz.flashcards)}
                </CardsContainer>
            </div>
        </main>
    )
}

export default EditQuiz