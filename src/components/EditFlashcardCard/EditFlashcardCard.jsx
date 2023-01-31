import React from 'react'
import Button from '@/components/Button/Button.jsx'
import Line from '@/components/Line/Line.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/EditFlashcardCard.css'

const EditFlashcardCard = ({ flashcard }) => {
    const letters = ['a', 'b', 'c', 'd']

    return (
        <Card>
            <div className={'edit-flashcard-card-content'}>
                <h2 className='question'>{flashcard.question}</h2>
                <Line />
                <div className={'answers'}>
                    {flashcard.answers.map((answer, index) => <p>{`${letters[index]}. ${answer.text}`}</p>)}
                </div>
                <Button type='2' size='2'>Delete</Button>
            </div>
        </Card>
    )
}

export default EditFlashcardCard