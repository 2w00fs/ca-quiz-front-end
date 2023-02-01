import React from 'react'
import './style/SingleAnswerFlashcardBack.css'
import Card from '@/components/Card/Card.jsx'

const SingleAnswerFlashcardBack = ({ flashcard, setResults, pageNumber, totalPages }) => {
    return (
        <Card className='single-answer-back-card'>
            <div className='content-wrapper'>
                <p className='page-number'>{pageNumber}/{totalPages}</p>
                <p className='answer-label'>Answer</p>
                <h3 className='answer-text'>{flashcard.answers[0].text}</h3>
                <form className='form-wrapper'>
                    <p className='is-correct-prompt'> Were you correct?</p>
                    <span className='answer-wrapper'>
                        <input type="radio" name='honestyForm' value={'yes'} />
                        <p className='yes'>Yes</p>
                    </span>
                    <span className='answer-wrapper'>
                        <input type="radio" name='honestyForm' value={'no'} />
                        <p className='no'>No</p>
                    </span>
                </form>
            </div>
        </Card>
    )
}

export default SingleAnswerFlashcardBack