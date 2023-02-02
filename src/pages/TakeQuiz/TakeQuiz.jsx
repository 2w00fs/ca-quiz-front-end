import React, { useEffect, useState } from 'react'
import { redirect, useOutletContext } from 'react-router-dom'
import MultipleChoiceFlashcard from '@/components/MultipleChoiceFlashcard/MultipleChoiceFlashcard.jsx'
import Title from '@/components/Title/Title.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/TakeQuiz.css'
import SingleAnswerHonestyFlashcard from '@/components/SingleAnswerHonestyFlashcard/SingleAnswerHonestyFlashcard.jsx'
import SingleAnswerInputFlashcard from '@/components/SingleAnswerInputFlashcard/SingleAnswerInputFlashcard.jsx'
import Button from '@/components/Button/Button.jsx'

const TakeQuiz = () => {
    const { quiz } = useOutletContext()

    const [ results, setResults ] = useState([])
    const [ count, setCount ] = useState(0)
    const [ isFlipped, setIsFlipped ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    useEffect(() => {
        if (quiz.flashcards) {
            setResults(new Array(quiz.flashcards.length).fill(null))
        }
    }, [quiz])

    if (quiz.name === undefined) {
        return <div></div>
    }

    const generateFlashcard = () => {
        if (quiz.flashcards[count].answers.length > 1) {
            return <MultipleChoiceFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} isError={isError} />
        } else if (quiz.flashcards[count].takesTextInput === true) {
            return <SingleAnswerInputFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} isError={isError} />
        } else {
            return <SingleAnswerHonestyFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} isError={isError} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        }
    }

    const rightArrowClickHandler = event => {
        if (results[count] === null) {
            setIsError(true)
            return
        }

        if (count + 1 > quiz.flashcards.length - 1) return

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
        <main className='take-quiz'>
            <div className='outer-content-wrapper'>
                <Title heading={quiz.name} subheading={'Take Quiz'} />
                <div className='inner-content-wrapper'>
                    <Card onClick={leftArrowClickHandler} className='left-arrow arrow'>
                        <div>{'<'}</div>
                    </Card>
                    {generateFlashcard()}
                    <Card onClick={rightArrowClickHandler} className='right-arrow arrow'>
                        <div>{'>'}</div>
                    </Card>
                </div>
                {count === quiz.flashcards.length - 1 && results[count] ? <Button path='../result' className='submit-button' state={{quiz, results}} type='1' size='1'>Submit</Button> : null}

            </div>
        </main>
    )
}

export default TakeQuiz
