import React from 'react'
import './style/FlashcardWrapper.css'
import Card from '@/components/Card/Card.jsx'
import Button from '@/components/Button/Button.jsx'

const FlashcardWrapper = ({ results, cardClickHandler, setIsError, count, maxCount, setCount, setIsFlipped, children }) => {
    const rightArrowClickHandler = event => {
        if (results[count] === null) {
            setIsError(true)
            return
        }

        if (count + 1 > maxCount) return

        if (setIsFlipped) setIsFlipped(false)
        setIsError(false)
        setCount(count + 1)
    }

    const leftArrowClickHandler = event => {
        if (count - 1 < 0) return

        if (setIsFlipped) setIsFlipped(false)
        setIsError(false)
        setCount(count - 1)
    }

    return (
        <div className='take-quiz-flashcard-wrapper'>
            <div className='inner-wrapper'>
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
            {count === maxCount ? <Button type='1' size='1'>Submit</Button> : null}
        </div>
    )
}

export default FlashcardWrapper