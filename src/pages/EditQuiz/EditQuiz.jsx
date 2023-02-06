import React, { useEffect, useState } from 'react'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardDetails from '@/components/FlashcardDetails/FlashcardDetails.jsx'
import './style/EditQuiz.css'
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import BackButton from '@/components/BackButton/BackButton.jsx'
import Button from '@/components/Button/Button.jsx'

const EditQuiz = () => {
    const { quiz, setQuiz } = useOutletContext()
    const [ inEditMode, setInEditMode ] = useState(false)
    const { quizId } = useParams()
    const location = useLocation()
    const nav = useNavigate()

    useEffect(() => {
        if (location.state && location.state.inEditMode) {
            setInEditMode(true)
        }
    }, [])

    const getFlashcards = flashcards => {
        if (!flashcards) {
            return []
        }
        let flashcardList = flashcards.map(flashcard => <FlashcardDetails key={flashcard._id} quiz={quiz} setQuiz={setQuiz} flashcard={flashcard} />)
        flashcardList.push(<AddButton key='addFlashcard' isEmpty={!Boolean(flashcardList.length)} text='Add Flashcard' />)
        return flashcardList
    }

    const updateName = async (name) => {
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: name })
        })
        let json = await res.json()
        if (res.status === 200) {
            setQuiz({ ...quiz, name: json.name })
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const editNameClickHandler = (event) => {
        event.preventDefault()
        setInEditMode(true)
    }

    const deleteClickHandler = async (event) => {
        let subjectId = quiz.subjectId
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 204) {
            nav(`/subject/${subjectId}`)
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    return (
        <main className='edit-quiz'>
            <BackButton>Quiz Home</BackButton>
            <div className='outer-content-wrapper'>
            <div className='top-wrapper'>
                    <Title subheading='Edit Quiz' initial={quiz.name ? quiz.name : ''} heading={quiz.name ? quiz.name.toUpperCase() : ''} inEditMode={inEditMode} setInEditMode={setInEditMode} updateName={updateName} formLabel={'Quiz Name'} />
                    {!inEditMode ? (
                        <div className='button-wrapper'>
                            <Button type='2' size='1' onClick={editNameClickHandler}>Edit Name</Button>
                            <Button type='3' size='1' onClick={deleteClickHandler}>Delete</Button>
                        </div>
                    ) : null}
                </div>
                <CardsContainer>
                    {getFlashcards(quiz.flashcards)}
                </CardsContainer>
            </div>
        </main>
    )
}

export default EditQuiz