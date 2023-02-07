import React, { useEffect, useState } from 'react'
import { redirect, useOutletContext, useParams } from 'react-router-dom'
import MultipleChoiceFlashcard from '@/components/MultipleChoiceFlashcard/MultipleChoiceFlashcard.jsx'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import Card from '@/components/Card/Card.jsx'
import './style/TakeQuiz.css'
import SingleAnswerHonestyFlashcard from '@/components/SingleAnswerHonestyFlashcard/SingleAnswerHonestyFlashcard.jsx'
import SingleAnswerInputFlashcard from '@/components/SingleAnswerInputFlashcard/SingleAnswerInputFlashcard.jsx'
import Button from '@/components/Button/Button.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'

const TakeQuiz = () => {
    const { quiz } = useOutletContext()

    const [ results, setResults ] = useState([])
    const [ count, setCount ] = useState(0)
    const [ isFlipped, setIsFlipped ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    const { quizId } = useParams()

    useEffect(() => {
        if (quiz.flashcards) {
            setResults(new Array(quiz.flashcards.length).fill(null))
        }
    }, [quiz])

    if (quiz.name === undefined) {
        return <div></div>
    }

    const generateFlashcard = () => {
        if (quiz.flashcards[count].answerOptions.length > 1) {
            return <MultipleChoiceFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} errorMessage={errorMessage} />
        } else if (quiz.flashcards[count].takesTextInput === true) {
            return <SingleAnswerInputFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} errorMessage={errorMessage} />
        } else {
            return <SingleAnswerHonestyFlashcard flashcard={quiz.flashcards[count]} results={results} setResults={setResults} count={count} maxCount={quiz.flashcards.length - 1} errorMessage={errorMessage} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        }
    }

    const rightArrowClickHandler = event => {
        if (results[count] === null) {
            setErrorMessage("You haven't selected an answer")
            return
        }

        if (count + 1 > quiz.flashcards.length - 1) return

        if (setIsFlipped) setIsFlipped(false)
        setErrorMessage('')
        setCount(count + 1)
    }

    const leftArrowClickHandler = event => {
        if (count - 1 < 0) return

        if (setIsFlipped) setIsFlipped(false)
        setErrorMessage('')
        setCount(count - 1)
    }

    const getContentHeader = () => {
        if (!quiz.name) return null
        let heading = quiz.name && quiz.name.toUpperCase()
        let subheading = 'Take Quiz'
        let links = [
            { text: 'Home', path: '/'},
            { text: 'Subject', path: `/subject/${quiz.subjectId}`}
        ]
        return <ContentHeader {...{ heading, subheading, links }} />
    }

    return (
        <main className='take-quiz'>
            <div className='content'>
                {getContentHeader()}
                <div className='inner-content-wrapper'>
                    <Card onClick={leftArrowClickHandler} className='left-arrow arrow arrow-wide-screen'>
                        <div>{'<'}</div>
                    </Card>
                    {generateFlashcard()}
                    <Card onClick={rightArrowClickHandler} className='right-arrow arrow arrow-wide-screen'>
                        <div>{'>'}</div>
                    </Card>
                </div>
                <div className='arrows-wrapper'>
                    <Card onClick={leftArrowClickHandler} className='left-arrow arrow arrow-small-screen'>
                        <div>{'<'}</div>
                    </Card>
                    <Card onClick={rightArrowClickHandler} className='right-arrow arrow arrow-small-screen'>
                        <div>{'>'}</div>
                    </Card>
                </div>
                {count === quiz.flashcards.length - 1 && results[count] ? <Button path='../result' className='submit-button' state={{quiz, results}} type='1' size='1'>Submit</Button> : null}

            </div>
        </main>
    )
}

export default TakeQuiz
