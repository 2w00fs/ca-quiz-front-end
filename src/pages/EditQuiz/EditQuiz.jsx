import React, { useEffect, useState } from 'react'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import FlashcardDetails from '@/components/FlashcardDetails/FlashcardDetails.jsx'
import './style/EditQuiz.css'
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
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

    const addFlashcard = async (event) => {
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}/flashcard/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ question: '', answerOptions: [{ text: '', isCorrectOption: true }], takesTextInput: false })
        })
        let json = await res.json()
        if (res.status === 201) {
            setQuiz(json)
            console.log(json.flashcards[json.flashcards.length - 1]._id)
            nav(`/quiz/${quizId}/flashcard/${json.flashcards[json.flashcards.length - 1]._id}/edit`)
        } else if (res.status === 500) {
            console.log('Unable to delete flashcard')
        } else if (res.status === 401) {
            nav('/auth/login')
        } else if (res.status === 404) {
            console.log('Quiz or flashcard not found')
        }
    }

    const getFlashcards = flashcards => {
        if (flashcards.length === 0) {
            return <AddButton onClick={addFlashcard} text='Add Flashcard' />
        } else {
            return flashcards.map(flashcard => <FlashcardDetails key={flashcard._id} quiz={quiz} setQuiz={setQuiz} flashcard={flashcard} />)
        }
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

    const deleteHandler = async (event) => {
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

    const getContentHeader = () => {
        if (!quiz.name) return null
        let resource = quiz
        let heading = quiz.name.toUpperCase()
        let subheading = 'Edit Quiz'
        let links = [
            { text: 'Subject', path: `/subject/${quiz.subjectId}` },
            { text: 'Quiz Home', path: `/quiz/${quizId}` }
        ]
        let childResourceType = 'quiz'
        let addChildHandler = addFlashcard
        return <ContentHeader {...{resource, heading, subheading, links, childResourceType, addChildHandler, updateName, deleteHandler}} />
    }

    if (!quiz.name || !quiz.flashcards) {
        return <div></div>
    }

    return (
        <main className='edit-quiz'>
            <div className='content'>
                {getContentHeader()}
                <CardsContainer>
                    {getFlashcards(quiz.flashcards)}
                </CardsContainer>
            </div>
        </main>
    )
}

export default EditQuiz