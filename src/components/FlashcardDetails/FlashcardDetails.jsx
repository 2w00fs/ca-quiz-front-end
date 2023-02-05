import React from 'react'
import Button from '@/components/Button/Button.jsx'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/FlashcardDetails.css'
import LinkCard from '@/components/LinkCard/LinkCard.jsx'
import { useParams } from 'react-router-dom'

const FlashcardDetails = ({ flashcard }) => {
    const letters = ['a', 'b', 'c', 'd']

    const { quizId } = useParams()

    return (
        <LinkCard path={`../../quiz/${quizId}/flashcard/${flashcard._id}/edit`}>
            <div className={'edit-flashcard-card-content'}>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <div className={'answers'}>
                    {flashcard.answerOptions.map((answer, index) => <p>{`${letters[index]}. ${answer.text}`}</p>)}
                </div>
                <Button type='2' size='2'>Delete</Button>
            </div>
        </LinkCard>
    )
}

export default FlashcardDetails