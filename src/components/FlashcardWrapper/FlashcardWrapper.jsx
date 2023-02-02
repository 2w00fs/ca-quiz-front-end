import React from 'react'
import './style/FlashcardWrapper.css'
import Card from '@/components/Card/Card.jsx'

const FlashcardWrapper = ({ leftArrowClickHandler, rightArrowClickHandler, cardClickHandler, children }) => {
    return (
        <div className='take-quiz-flashcard-wrapper'>
            <Card onClick={leftArrowClickHandler} className='left-arrow arrow'>
                <div>{'<'}</div>
            </Card>
            <Card onClick={cardClickHandler} className='flashcard'>
                {children}
            </Card>
            <Card onClick={rightArrowClickHandler} className='right-arrow arrow'>
                <div>{'>'}</div>
            </Card>
        </div>
    )
}

export default FlashcardWrapper