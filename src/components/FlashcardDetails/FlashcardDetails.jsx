import React from 'react'
import Button from '@/components/Button/Button.jsx'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/FlashcardDetails.css'
import LinkCard from '@/components/LinkCard/LinkCard.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import {apiurl} from "../../../config.jsx";


const FlashcardDetails = ({ quiz, setQuiz, flashcard }) => {
    const letters = ['a', 'b', 'c', 'd']

    const nav = useNavigate()

    const { quizId } = useParams()

    const createDeleteHandler = (flashcardId) => {
        const deleteHandler = async (event) => {
            event.preventDefault()
            let token = localStorage.getItem('jwtToken')
            let res = await fetch(apiurl + `quiz/${quizId}/flashcard/${flashcardId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                let flashcardList = [...quiz.flashcards]
                for (let i in flashcardList) {
                    if (flashcardList[i]._id === flashcardId) {
                        flashcardList.splice(i, 1)
                        break
                    }
                }
                setQuiz({ ...quiz, flashcards: flashcardList })
            } else if (res.status === 500) {
                console.log('Unable to delete flashcard')
            } else if (res.status === 401) {
                nav('/auth/login')
            } else if (res.status === 404) {
                console.log('Quiz or flashcard not found')
            }
        }
        return deleteHandler
    }

    return (
        <LinkCard path={`../../quiz/${quizId}/flashcard/${flashcard._id}/edit`}>
            <div className={'edit-flashcard-card-content'}>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <div className={'answers'}>
                    {flashcard.answerOptions.map((answer, index) => <p key={answer._id}>{`${flashcard.answerOptions.length > 1 ? letters[index] + '. ' : ''}${answer.text}`}</p>)}
                </div>
                <Button onClick={createDeleteHandler(flashcard._id)} type='2' size='2'>Delete</Button>
            </div>
        </LinkCard>
    )
}

export default FlashcardDetails